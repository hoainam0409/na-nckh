import { createContext, useReducer, useState } from "react";
import { loaiĐTReducer } from "../reducers/loaiĐTReducer";
import axios from "axios";
import {
  apiUrl,
  LOAIDETAI_LOADED_SUCCESS,
  LOAIDETAI_LOADED_FAIL,
  LOAIDETAI_ADD,
  DELETE_LOAIDETAI,
  FIND_LOAIDETAI,
  UPDATE_LOAIDETAI,
} from "./constant";

export const LoaiĐTContext = createContext();

const LoaiĐTContextProvider = ({ children }) => {
  // State
  const [loaiĐTState, dispatch] = useReducer(loaiĐTReducer, {
    loaiĐT: null,
    loaiĐTs: [],
    loaiĐTsLoading: true,
  });

  const [showThemLoaiĐT, setShowThemLoaiĐT] = useState(false);
  const [showSuaLoaiĐT, setShowSuaLoaiĐT] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [loaiĐT, setLoaiĐT] = useState("");

  // Lấy tất cả cấp đề tài
  const getLoaiĐTs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/loaidetai`);
      if (response.data.success) {
        dispatch({
          type: LOAIDETAI_LOADED_SUCCESS,
          payload: response.data.loaiĐTs,
        });
      }
    } catch (error) {
      dispatch({ type: LOAIDETAI_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addLoaiĐT = async (newLoaiĐT) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/loaidetai`,
        newLoaiĐT
      );
      if (response.data.success) {
        dispatch({ type: LOAIDETAI_ADD, payload: response.data.loaiĐT});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteLoaiĐT = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/loaidetai/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_LOAIDETAI, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findLoaiĐT = (loaiĐTId) => {
    const loaiĐT = loaiĐTState.loaiĐTs.find(
      (loaiĐT) => loaiĐT._id === loaiĐTId
    );
    dispatch({ type: FIND_LOAIDETAI, payload: loaiĐT });
  };

  // Chỉnh sửa 
  const updateLoaiĐT = async (updatedLoaiĐT) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/loaidetai/${updatedLoaiĐT._id}`,
        updatedLoaiĐT
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_LOAIDETAI, payload: response.data.loaiĐT });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const LoaiĐTContextData = {
    loaiĐTState,
    getLoaiĐTs,
    showThemLoaiĐT,
    setShowThemLoaiĐT,
    addLoaiĐT,
    showToast,
    setShowToast,
    deleteLoaiĐT,
    loaiĐT,
    setLoaiĐT,
    updateLoaiĐT,
    showSuaLoaiĐT,
    setShowSuaLoaiĐT,
    findLoaiĐT,
  };

  return (
    <LoaiĐTContext.Provider value={LoaiĐTContextData}>
      {children}
    </LoaiĐTContext.Provider>
  );
};

export default LoaiĐTContextProvider;
