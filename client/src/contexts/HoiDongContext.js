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