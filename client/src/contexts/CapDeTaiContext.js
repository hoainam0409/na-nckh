import { createContext, useReducer, useState } from "react";
import { capdetaiReducer } from "../reducers/capdetaiReducer";
import axios from "axios";
import {
  apiUrl,
  CAPDETAI_LOADED_FAIL,
  CAPDETAI_LOADED_SUCCESS,
  CAPDETAI_ADD,
  DELETE_CAPDETAI,
  UPDATE_CAPDETAI,
  FIND_CAPDETAI,
} from "./constant";

export const CapDeTaiContext = createContext();

const CapDeTaiContextProvider = ({ children }) => {
  // State
  const [capdetaiState, dispatch] = useReducer(capdetaiReducer, {
    capdetai: null,
    capdetais: [],
    capdetaisLoading: true,
  });

  const [showThemCapDeTai, setShowThemCapDeTai] = useState(false);
  const [showSuaCapDeTai, setShowSuaCapDeTai] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [capdetai, setCapDeTai] = useState("");

  // Lấy tất cả cấp đề tài
  const getCapDeTais = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/capdetai`);
      if (response.data.success) {
        dispatch({
          type: CAPDETAI_LOADED_SUCCESS,
          payload: response.data.capdetais,
        });
      }
    } catch (error) {
      dispatch({ type: CAPDETAI_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addCapDeTai = async (newCapDeTai) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/capdetai`,
        newCapDeTai
      );
      if (response.data.success) {
        dispatch({ type: CAPDETAI_ADD, payload: response.data.capdetai});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteCapDeTai = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/danhmuc/capdetai/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_CAPDETAI, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm thông báo khi thực hiện chỉnh sửa
  const findCapDeTai = (capdetaiId) => {
    const capdetai = capdetaiState.capdetais.find(
      (capdetai) => capdetai._id === capdetaiId
    );
    dispatch({ type: FIND_CAPDETAI, payload: capdetai });
  };

  // Chỉnh sửa thông báo
  const updateCapDeTai = async (updatedCapDeTai) => {
    try {
      const response = await axios.put(
        `${apiUrl}/danhmuc/capdetai/${updatedCapDeTai._id}`,
        updatedCapDeTai
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_CAPDETAI, payload: response.data.capdetai });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const CapDeTaiContextData = {
    capdetaiState,
    getCapDeTais,
    showThemCapDeTai,
    setShowThemCapDeTai,
    addCapDeTai,
    showToast,
    setShowToast,
    deleteCapDeTai,
    capdetai,
    setCapDeTai,
    updateCapDeTai,
    showSuaCapDeTai,
    setShowSuaCapDeTai,
    findCapDeTai,
  };

  return (
    <CapDeTaiContext.Provider value={CapDeTaiContextData}>
      {children}
    </CapDeTaiContext.Provider>
  );
};

export default CapDeTaiContextProvider;
