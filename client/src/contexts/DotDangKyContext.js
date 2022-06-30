import { createContext, useReducer, useState } from "react";
import { dotdangkyReducer } from "../reducers/dotdangkyReducer";
import axios from "axios";
import {
  apiUrl,
  DOTDANGKY_LOADED_FAIL,
  DOTDANGKY_LOADED_SUCCESS,
  DOTDANGKY_ADD,
  DELETE_DOTDANGKY,
  UPDATE_DOTDANGKY,
  FIND_DOTDANGKY,
} from "./constant";

export const DotDangKyContext = createContext();

const DotDangKyContextProvider = ({ children }) => {
  // State
  const [dotdangkyState, dispatch] = useReducer(dotdangkyReducer, {
    dotdangky: null,
    dotdangkys: [],
    dotdangkysLoading: true,
  });

  const [showThemDotDangKy, setShowThemDotDangKy] = useState(false);
  const [showSuaDotDangKy, setShowSuaDotDangKy] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [dotdangky, setDotDangKy] = useState("");

  // Lấy tất cả
  const getDotDangKys = async () => {
    try {
      const response = await axios.get(`${apiUrl}/detai/dotdangky`);
      if (response.data.success) {
        dispatch({
          type: DOTDANGKY_LOADED_SUCCESS,
          payload: response.data.dotdangkys,
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
        `${apiUrl}/detai/dotdangky`,
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
        `${apiUrl}/detai/dotdangky/${id}`
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
        `${apiUrl}/detai/dotdangky/${updatedDotDangKy._id}`,
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
