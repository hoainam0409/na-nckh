import { createContext, useReducer, useState } from "react";
import { loaisanphamReducer } from "../reducers/loaisanphamReducer";
import axios from "axios";
import {
  apiUrl,
  LOAISP_LOADED_FAIL,
  LOAISP_LOADED_SUCCESS,
  LOAISP_ADD,
  DELETE_LOAISP,
  UPDATE_LOAISP,
  FIND_LOAISP,
} from "./constant";

export const LoaiSPContext = createContext();

const LoaiSPContextProvider = ({ children }) => {
  // State
  const [loaisanphamState, dispatch] = useReducer(loaisanphamReducer, {
    loaisanpham: null,
    loaisanphams: [],
    loaisanphamsLoading: true,
  });

  const [showThemLoaiSP, setShowThemLoaiSP] = useState(false);
  const [showSuaLoaiSP, setShowSuaLoaiSP] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [loaisanpham, setLoaiSP] = useState("");

  // Lấy tất cả cấp đề tài
  const getLoaiSPs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/loai-san-pham`);
      if (response.data.success) {
        dispatch({
          type: LOAISP_LOADED_SUCCESS,
          payload: response.data.loaisanphams,
        });
      }
    } catch (error) {
      dispatch({ type: LOAISP_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addLoaiSP = async (newLoaiSP) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/loai-san-pham`,
        newLoaiSP
      );
      if (response.data.success) {
        dispatch({ type: LOAISP_ADD, payload: response.data.loaisanpham});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteLoaiSP = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/loai-san-pham/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_LOAISP, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findLoaiSP = (loaisanphamId) => {
    const loaisanpham = loaisanphamState.loaisanphams.find(
      (loaisanpham) => loaisanpham._id === loaisanphamId
    );
    dispatch({ type: FIND_LOAISP, payload: loaisanpham });
  };

  // Chỉnh sửa 
  const updateLoaiSP = async (updatedLoaiSP) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/loai-san-pham/${updatedLoaiSP._id}`,
        updatedLoaiSP
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_LOAISP, payload: response.data.loaisanpham });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const LoaiSPContextData = {
    loaisanphamState,
    getLoaiSPs,
    showThemLoaiSP,
    setShowThemLoaiSP,
    addLoaiSP,
    showToast,
    setShowToast,
    deleteLoaiSP,
    loaisanpham,
    setLoaiSP,
    updateLoaiSP,
    showSuaLoaiSP,
    setShowSuaLoaiSP,
    findLoaiSP,
  };

  return (
    <LoaiSPContext.Provider value={LoaiSPContextData}>
      {children}
    </LoaiSPContext.Provider>
  );
};

export default LoaiSPContextProvider;
