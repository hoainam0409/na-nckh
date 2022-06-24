import { createContext, useReducer, useState } from "react";
import { detaisvReducer } from "../reducers/detaisvReducer";
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
  const [fullscreen, setFullscreen] = useState(true);
  function ShowFullScreen(breakpoint) {
    setFullscreen(breakpoint);
    setShowThemDeTaiSV(true);
  }

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });

  const [detaisv, setDeTaiSV] = useState("");

  // Lấy tất cả
  const getDeTaiSVs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/nckh/detai-sinhvien/dangky`);
      if (response.data.success) {
        dispatch({
          type: DETAISV_LOADED_SUCCESS,
          payload: response.data.detaisvs,
        });
      }
    } catch (error) {
      dispatch({ type: DETAISV_LOADED_FAIL });
    }
  };

  //Thêm mới 
  const addDeTaiSV = async (newDeTaiSV) => {
    try {
      const response = await axios.post(
        `${apiUrl}/nckh/detai-sinhvien/dangky`,
        newDeTaiSV
      );
      if (response.data.success) {
        dispatch({ type: DETAISV_ADD, payload: response.data.detaisv});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa 
  const deleteDeTaiSV = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/nckh/detai-sinhvien/dangky/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_DETAISV, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findDeTaiSV = (detaisvId) => {
    const detaisv = detaisvState.detaisvs.find(
      (detaisv) => detaisv._id === detaisvId
    );
    dispatch({ type: FIND_DETAISV, payload: detaisv });
  };

  // Chỉnh sửa
  const updateDeTaiSV = async (updatedDeTaiSV) => {
    try {
      const response = await axios.put(
        `${apiUrl}/nckh/detai-sinhvien/dangky/${updatedDeTaiSV._id}`,
        updatedDeTaiSV
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_DETAISV, payload: response.data.detaisv });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // context data
  const DeTaiSVContextData = {
    detaisvState,
    getDeTaiSVs,
    showThemDeTaiSV,
    setShowThemDeTaiSV,
    addDeTaiSV,
    showToast,
    setShowToast,
    deleteDeTaiSV,
    detaisv,
    setDeTaiSV,
    updateDeTaiSV,
    showSuaDeTaiSV,
    setShowSuaDeTaiSV,
    findDeTaiSV,
    ShowFullScreen,
    fullscreen,
    setFullscreen
  };

  return (
    <DeTaiSVContext.Provider value={DeTaiSVContextData}>
      {children}
    </DeTaiSVContext.Provider>
  );
};

export default DeTaiSVContextProvider;
