import { createContext, useReducer, useState } from "react";
import { linhvucReducer } from "../reducers/linhvucReducer";
import axios from "axios";
import {
  apiUrl,
  LINHVUC_LOADED_SUCCESS,
  LINHVUC_LOADED_FAIL,
  LINHVUC_ADD,
  DELETE_LINHVUC,
  FIND_LINHVUC,
  UPDATE_LINHVUC,
} from "./constant";

export const LinhVucContext = createContext();

const LinhVucContextProvider = ({ children }) => {
  // State
  const [linhvucState, dispatch] = useReducer(linhvucReducer, {
    linhvuc: null,
    linhvucs: [],
    linhvucsLoading: true,
  });

  const [showThemLinhVuc, setShowThemLinhVuc] = useState(false);
  const [showSuaLinhVuc, setShowSuaLinhVuc] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [linhvuc, setLinhVuc] = useState("");

  // Lấy tất cả
  const getLinhVucs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/linhvuc`);
      if (response.data.success) {
        dispatch({
          type: LINHVUC_LOADED_SUCCESS,
          payload: response.data.linhvucs,
        });
      }
    } catch (error) {
      dispatch({ type: LINHVUC_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addLinhVuc = async (newLinhVuc) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/linhvuc`,
        newLinhVuc
      );
      if (response.data.success) {
        dispatch({ type: LINHVUC_ADD, payload: response.data.linhvuc});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteLinhVuc = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/linhvuc/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_LINHVUC, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm thông báo khi thực hiện chỉnh sửa
  const findLinhVuc = (linhvucId) => {
    const linhvuc = linhvucState.linhvucs.find(
      (linhvuc) => linhvuc._id === linhvucId
    );
    dispatch({ type: FIND_LINHVUC, payload: linhvuc });
  };

  // Chỉnh sửa thông báo
  const updateLinhVuc = async (updatedLinhVuc) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/linhvuc/${updatedLinhVuc._id}`,
        updatedLinhVuc
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_LINHVUC, payload: response.data.linhvuc });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const LinhVucContextData = {
    linhvucState,
    getLinhVucs,
    showThemLinhVuc,
    setShowThemLinhVuc,
    addLinhVuc,
    showToast,
    setShowToast,
    deleteLinhVuc,
    linhvuc,
    setLinhVuc,
    updateLinhVuc,
    showSuaLinhVuc,
    setShowSuaLinhVuc,
    findLinhVuc,
  };

  return (
    <LinhVucContext.Provider value={LinhVucContextData}>
      {children}
    </LinhVucContext.Provider>
  );
};

export default LinhVucContextProvider;
