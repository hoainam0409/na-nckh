import { createContext, useReducer, useState } from "react";
import { hoidongReducer } from "../reducers/hoidongReducer";
import axios from "axios";
import {
  apiUrl,
  HOIDONG_LOADED_FAIL,
  HOIDONG_LOADED_SUCCESS,
  HOIDONG_ADD,
  DELETE_HOIDONG,
  UPDATE_HOIDONG,
  FIND_HOIDONG,
} from "./constant";

export const HoiDongContext = createContext();

const HoiDongContextProvider = ({ children }) => {
  // State
  const [hoidongState, dispatch] = useReducer(hoidongReducer, {
    hoidong: null,
    hoidongs: [],
    hoidongsLoading: true,
  });

  const [showThemHoiDong, setShowThemHoiDong] = useState(false);
  const [showSuaHoiDong, setShowSuaHoiDong] = useState(false);


  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [hoidong, setHoiDong] = useState("");

  // Lấy tất cả
  const getHoiDongs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/quanly/hoidong`);
      if (response.data.success) {
        dispatch({
          type: HOIDONG_LOADED_SUCCESS,
          payload: response.data.hoidongs,
        });
      }
    } catch (error) {
      dispatch({ type: HOIDONG_LOADED_FAIL });
    }
  };

  //Thêm mới 
  const addHoiDong = async (newHoiDong) => {
    try {
      newHoiDong.danhsachthanhvien.push(
        {
          id: newHoiDong.user1._id,
          hovaten: newHoiDong.user1.hovaten,
          idVaiTro: newHoiDong.vaitro1._id,
          ten: newHoiDong.vaitro1.ten,
          chucdanhKH: newHoiDong.chucdanhKH1,
          donvi: newHoiDong.donvi1
        },
        {
          id: newHoiDong.user2._id,
          hovaten: newHoiDong.user2.hovaten,
          idVaiTro: newHoiDong.vaitro2._id,
          ten: newHoiDong.vaitro2.ten,
          chucdanhKH: newHoiDong.chucdanhKH2,
          donvi: newHoiDong.donvi2
        },
        {
          id: newHoiDong.user3._id,
          hovaten: newHoiDong.user3.hovaten,
          idVaiTro: newHoiDong.vaitro3._id,
          ten: newHoiDong.vaitro3.ten,
          chucdanhKH: newHoiDong.chucdanhKH3,
          donvi: newHoiDong.donvi3
        },
        {
          id: newHoiDong.user4._id,
          hovaten: newHoiDong.user4.hovaten,
          idVaiTro: newHoiDong.vaitro4._id,
          ten: newHoiDong.vaitro4.ten,
          chucdanhKH: newHoiDong.chucdanhKH4,
          donvi: newHoiDong.donvi4
        },
        {
          id: newHoiDong.user5._id,
          hovaten: newHoiDong.user5.hovaten,
          idVaiTro: newHoiDong.vaitro5._id,
          ten: newHoiDong.vaitro5.ten,
          chucdanhKH: newHoiDong.chucdanhKH5,
          donvi: newHoiDong.donvi5
        },
      )
      const response = await axios.post(
        `${apiUrl}/quanly/hoidong`,
        newHoiDong
      );
      if (response.data.success) {
        dispatch({ type: HOIDONG_ADD, payload: response.data.hoidong});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa 
  const deleteHoiDong = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/quanly/hoidong/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_HOIDONG, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findHoiDong = (hoidongId) => {
    const hoidong = hoidongState.hoidongs.find(
      (hoidong) => hoidong._id === hoidongId
    );
    dispatch({ type: FIND_HOIDONG, payload: hoidong });
  };

  // Chỉnh sửa
  const updateHoiDong = async (updatedHoiDong) => {
    try {
      const response = await axios.put(
        `${apiUrl}/quanly/hoidong/${updatedHoiDong._id}`,
        updatedHoiDong
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_HOIDONG, payload: response.data.hoidong });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // context data
  const HoiDongContextData = {
    hoidongState,
    getHoiDongs,
    showThemHoiDong,
    setShowThemHoiDong,
    addHoiDong,
    showToast,
    setShowToast,
    deleteHoiDong,
    hoidong,
    setHoiDong,
    updateHoiDong,
    showSuaHoiDong,
    setShowSuaHoiDong,
    findHoiDong,
  };

  return (
    <HoiDongContext.Provider value={HoiDongContextData}>
      {children}
    </HoiDongContext.Provider>
  );
};

export default HoiDongContextProvider;
