import { createContext, useReducer, useState } from "react";
import { sanphamUDReducer } from "../reducers/sanphamUDReducer";
import axios from "axios";
import {
  apiUrl,
  SANPHAMUD_LOADED_FAIL,
  SANPHAMUD_LOADED_SUCCESS,
  SANPHAMUD_ADD,
  DELETE_SANPHAMUD,
  UPDATE_SANPHAMUD,
  FIND_SANPHAMUD,
} from "./constant";

export const SanPhamUDContext = createContext();

const SanPhamUDContextProvider = ({ children }) => {
  // State
  const [sanphamUDState, dispatch] = useReducer(sanphamUDReducer, {
    sanphamUD: null,
    sanphamUDs: [],
    sanphamUDsLoading: true,
  });

  const [showThemSanPhamUD, setShowThemSanPhamUD] = useState(false);
  const [showSuaSanPhamUD, setShowSuaSanPhamUD] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [sanphamUD, setSanPhamUD] = useState("");

  // Lấy tất cả 
  const getSanPhamUDs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/loai-san-pham-ung-dung`);
      if (response.data.success) {
        dispatch({
          type: SANPHAMUD_LOADED_SUCCESS,
          payload: response.data.sanphamUDs,
        });
      }
    } catch (error) {
      dispatch({ type: SANPHAMUD_LOADED_FAIL });
    }
  };

  //Thêm mới
  const addSanPhamUD = async (newSanPhamUD) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/loai-san-pham-ung-dung`,
        newSanPhamUD
      );
      if (response.data.success) {
        dispatch({ type: SANPHAMUD_ADD, payload: response.data.sanphamUD});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteSanPhamUD = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/loai-san-pham-ung-dung/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_SANPHAMUD, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findSanPhamUD = (sanphamUDId) => {
    const sanphamUD = sanphamUDState.sanphamUDs.find(
      (sanphamUD) => sanphamUD._id === sanphamUDId
    );
    dispatch({ type: FIND_SANPHAMUD, payload: sanphamUD });
  };

  // Chỉnh sửa 
  const updateSanPhamUD = async (updatedSanPhamUD) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/loai-san-pham-ung-dung/${updatedSanPhamUD._id}`,
        updatedSanPhamUD
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_SANPHAMUD, payload: response.data.sanphamUD });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  //context data
  const SanPhamUDContextData = {
    sanphamUDState,
    getSanPhamUDs,
    showThemSanPhamUD,
    setShowThemSanPhamUD,
    addSanPhamUD,
    showToast,
    setShowToast,
    deleteSanPhamUD,
    sanphamUD,
    setSanPhamUD,
    updateSanPhamUD,
    showSuaSanPhamUD,
    setShowSuaSanPhamUD,
    findSanPhamUD,
  };

  return (
    <SanPhamUDContext.Provider value={SanPhamUDContextData}>
      {children}
    </SanPhamUDContext.Provider>
  );
};

export default SanPhamUDContextProvider;
