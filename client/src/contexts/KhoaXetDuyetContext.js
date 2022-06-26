import { createContext, useReducer, useState } from "react";
import { khoaxetduyetReducer } from "../reducers/khoaxetduyetReducer";
import axios from "axios";
import {
  apiUrl,
  KHOAXETDUYET_LOADED_FAIL,
  KHOAXETDUYET_LOADED_SUCCESS,
  KHOAXETDUYET_ADD,
  DELETE_KHOAXETDUYET,
  UPDATE_KHOAXETDUYET,
  FIND_KHOAXETDUYET,
} from "./constant";

export const KhoaXetDuyetContext = createContext();

const KhoaXetDuyetContextProvider = ({ children }) => {
  // State
  const [khoaxetduyetState, dispatch] = useReducer(khoaxetduyetReducer, {
    khoaxetduyet: null,
    khoaxetduyets: [],
    khoaxetduyetsLoading: true,
  });

  const [showThemKhoaXetDuyet, setShowThemKhoaXetDuyet] = useState(false);
  const [showSuaKhoaXetDuyet, setShowSuaKhoaXetDuyet] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [khoaxetduyet, setKhoaXetDuyet] = useState("");

  // Lấy tất cả cấp đề tài
  const getKhoaXetDuyets = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/khoa`);
      if (response.data.success) {
        dispatch({
          type: KHOAXETDUYET_LOADED_SUCCESS,
          payload: response.data.khoaxetduyets,
        });
      }
    } catch (error) {
      dispatch({ type: KHOAXETDUYET_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addKhoaXetDuyet = async (newKhoaXetDuyet) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/khoa`,
        newKhoaXetDuyet
      );
      if (response.data.success) {
        dispatch({ type: KHOAXETDUYET_ADD, payload: response.data.khoaxetduyet});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteKhoaXetDuyet = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/khoa/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_KHOAXETDUYET, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm thông báo khi thực hiện chỉnh sửa
  const findKhoaXetDuyet = (khoaxetduyetId) => {
    const khoaxetduyet = khoaxetduyetState.khoaxetduyets.find(
      (khoaxetduyet) => khoaxetduyet._id === khoaxetduyetId
    );
    dispatch({ type: FIND_KHOAXETDUYET, payload: khoaxetduyet });
  };

  // Chỉnh sửa thông báo
  const updateKhoaXetDuyet = async (updatedKhoaXetDuyet) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/khoa/${updatedKhoaXetDuyet._id}`,
        updatedKhoaXetDuyet
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_KHOAXETDUYET, payload: response.data.khoaxetduyet });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const KhoaXetDuyetContextData = {
    khoaxetduyetState,
    getKhoaXetDuyets,
    showThemKhoaXetDuyet,
    setShowThemKhoaXetDuyet,
    addKhoaXetDuyet,
    showToast,
    setShowToast,
    deleteKhoaXetDuyet,
    khoaxetduyet,
    setKhoaXetDuyet,
    updateKhoaXetDuyet,
    showSuaKhoaXetDuyet,
    setShowSuaKhoaXetDuyet,
    findKhoaXetDuyet,
  };

  return (
    <KhoaXetDuyetContext.Provider value={KhoaXetDuyetContextData}>
      {children}
    </KhoaXetDuyetContext.Provider>
  );
};

export default KhoaXetDuyetContextProvider;
