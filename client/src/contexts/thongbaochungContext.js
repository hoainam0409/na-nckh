import { createContext, useReducer, useState } from "react";
import { thongbaochungReducer } from "../reducers/thongbaochungReducer";
import axios from "axios";
import {
  apiUrl,
  TB_LOADED_FAIL,
  TB_LOADED_SUCCESS,
  TB_ADD,
  DELETE_TB,
  UPDATE_TB,
  FIND_TB,
} from "./constant";

export const ThongbaochungContext = createContext();

const ThongbaochungContextProvider = ({ children }) => {
  // State
  const [thongbaochungState, dispatch] = useReducer(thongbaochungReducer, {
    thongbaochung: null,
    thongbaochungs: [],
    thongbaochungsLoading: true,
  });

  const [showThemThongBao, setShowThemThongBao] = useState(false);
  const [showSuaThongBaoChung, setShowSuaThongBaoChung] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [thongbaochung, setThongBaoChung] = useState("");

  // Lấy tất cả thông báo
  const getThongbaochungs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/thongbao/thongbaochung`);
      if (response.data.success) {
        dispatch({
          type: TB_LOADED_SUCCESS,
          payload: response.data.thongbaochungs,
        });
      }
    } catch (error) {
      dispatch({ type: TB_LOADED_FAIL });
    }
  };

  //Thêm mới thông báo
  const addThongBaoChung = async (newThongBaoChung) => {
    try {
      const response = await axios.post(
        `${apiUrl}/thongbao/thongbaochung`,
        newThongBaoChung
      );
      if (response.data.success) {
        dispatch({ type: TB_ADD, payload: response.data.thongbaochung });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa thông báo chung
  const deleteThongBaoChung = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/thongbao/thongbaochung/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_TB, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm thông báo khi thực hiện chỉnh sửa
  const findThongBaoChung = (thongbaochungId) => {
    const thongbaochung = thongbaochungState.thongbaochungs.find(
      (thongbaochung) => thongbaochung._id === thongbaochungId
    );
    dispatch({ type: FIND_TB, payload: thongbaochung });
  };

  // Chỉnh sửa thông báo
  const updateThongBaoChung = async (updatedThongBaoChung) => {
    try {
      const response = await axios.put(
        `${apiUrl}/thongbao/thongbaochung/${updatedThongBaoChung._id}`,
        updatedThongBaoChung
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_TB, payload: response.data.thongbaochung });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const ThongbaochungContextData = {
    thongbaochungState,
    getThongbaochungs,
    showThemThongBao,
    setShowThemThongBao,
    addThongBaoChung,
    showToast,
    setShowToast,
    deleteThongBaoChung,
    thongbaochung,
    setThongBaoChung,
    updateThongBaoChung,
    showSuaThongBaoChung,
    setShowSuaThongBaoChung,
    findThongBaoChung,
  };

  return (
    <ThongbaochungContext.Provider value={ThongbaochungContextData}>
      {children}
    </ThongbaochungContext.Provider>
  );
};

export default ThongbaochungContextProvider;
