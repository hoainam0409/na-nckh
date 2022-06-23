import { createContext, useReducer, useState } from "react";
import { detaisvReducer } from "../reducers/dotdangkyReducer";
import axios from "axios";
import {
  apiUrl,
  DETAISV_LOADED_FAIL,
  DETAISV_LOADED_SUCCESS,
  DETAISV_ADD,
  DELETE_DETAISV,
  UPDATE_DETAISV,
  FIND_DETAISV,
} from "./constant";

export const DeTaiSVContext = createContext();

const DeTaiSVContextProvider = ({ children }) => {
  // State
  const [detaisvState, dispatch] = useReducer(detaisvReducer, {
    detaisv: null,
    detaisvs: [],
    detaisvsLoading: true,
  });

  const [showThemDeTaiSV, setShowThemDeTaiSV] = useState(false);
  const [showSuaDeTaiSV, setShowSuaDeTaiSV] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });

  const [detaisv, setDeTaiSV] = useState("");

  // Lấy tất cả
  const getDeTaiSVs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/nckh/dotdangky-detai`);
      if (response.data.success) {
        dispatch({
          type: DETAISV_LOADED_SUCCESS,
          payload: response.data.detaisvs,
        });
      }
    } catch (error) {
      dispatch({ type: DOTDANGKY_LOADED_FAIL });
    }
  };

  //Thêm mới 
  const addDotDangKy = async (newDotDangKy) => {
    try {
      const response = await axios.post(
        `${apiUrl}/nckh/dotdangky-detai`,
        newDotDangKy
      );
      if (response.data.success) {
        dispatch({ type: DOTDANGKY_ADD, payload: response.data.dotdangky});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa 
  const deleteDotDangKy = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/nckh/dotdangky-detai/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_DOTDANGKY, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findDotDangKy = (dotdangkyId) => {
    const dotdangky = dotdangkyState.dotdangkys.find(
      (dotdangky) => dotdangky._id === dotdangkyId
    );
    dispatch({ type: FIND_DOTDANGKY, payload: dotdangky });
  };

  // Chỉnh sửa
  const updateDotDangKy = async (updatedDotDangKy) => {
    try {
      const response = await axios.put(
        `${apiUrl}/nckh/dotdangky-detai/${updatedDotDangKy._id}`,
        updatedDotDangKy
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_DOTDANGKY, payload: response.data.dotdangky });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // context data
  const DotDangKyContextData = {
    dotdangkyState,
    getDotDangKys,
    showThemDotDangKy,
    setShowThemDotDangKy,
    addDotDangKy,
    showToast,
    setShowToast,
    deleteDotDangKy,
    dotdangky,
    setDotDangKy,
    updateDotDangKy,
    showSuaDotDangKy,
    setShowSuaDotDangKy,
    findDotDangKy,
  };

  return (
    <DotDangKyContext.Provider value={DotDangKyContextData}>
      {children}
    </DotDangKyContext.Provider>
  );
};

export default DotDangKyContextProvider;
