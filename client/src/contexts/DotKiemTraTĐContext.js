import { createContext, useReducer, useState } from "react";
import { dotkiemtraTĐReducer } from "../reducers/dotkiemtraTĐReducer";
import axios from "axios";
import {
  apiUrl,
  DOTKIEMTRATĐ_LOADED_FAIL,
  DOTKIEMTRATĐ_LOADED_SUCCESS,
  DOTKIEMTRATĐ_ADD,
  DELETE_DOTKIEMTRATĐ,
  UPDATE_DOTKIEMTRATĐ,
  FIND_DOTKIEMTRATĐ,
} from "./constant";

export const DotKiemTraTĐContext = createContext();

const DotKiemTraTĐContextProvider = ({ children }) => {
  // State
  const [dotkiemtraTĐState, dispatch] = useReducer(dotkiemtraTĐReducer, {
    dotkiemtraTĐ: null,
    dotkiemtraTĐs: [],
    dotkiemtraTĐsLoading: true,
  });

  const [showThemDotKiemTraTĐ, setShowThemDotKiemTraTĐ] = useState(false);
  const [showSuaDotKiemTraTĐ, setShowSuaDotKiemTraTĐ] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [dotkiemtraTĐ, setDotKiemTraTĐ] = useState("");

  // Lấy tất cả
  const getDotKiemTraTĐs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/detai-canbo/dot-kiem-tra-tien-do`);
      if (response.data.success) {
        dispatch({
          type: DOTKIEMTRATĐ_LOADED_SUCCESS,
          payload: response.data.dotkiemtraTĐs,
        });
      }
    } catch (error) {
      dispatch({ type: DOTKIEMTRATĐ_LOADED_FAIL });
    }
  };

  //Thêm mới 
  const addDotKiemTraTĐ = async (newDotKiemTraTĐ) => {
    try {
      const response = await axios.post(
        `${apiUrl}/detai-canbo/dot-kiem-tra-tien-do`,
        newDotKiemTraTĐ
      );
      if (response.data.success) {
        dispatch({ type: DOTKIEMTRATĐ_ADD, payload: response.data.dotkiemtraTĐ});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa 
  const deleteDotKiemTraTĐ = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/detai-canbo/dot-kiem-tra-tien-do/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_DOTKIEMTRATĐ, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findDotKiemTraTĐ = (dotkiemtraTĐId) => {
    const dotkiemtraTĐ = dotkiemtraTĐState.dotkiemtraTĐs.find(
      (dotkiemtraTĐ) => dotkiemtraTĐ._id === dotkiemtraTĐId
    );
    dispatch({ type: FIND_DOTKIEMTRATĐ, payload: dotkiemtraTĐ });
  };

  // Chỉnh sửa
  const updateDotKiemTraTĐ = async (updatedDotKiemTraTĐ) => {
    try {
      const response = await axios.put(
        `${apiUrl}/detai-canbo/dot-kiem-tra-tien-do/${updatedDotKiemTraTĐ._id}`,
        updatedDotKiemTraTĐ
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_DOTKIEMTRATĐ, payload: response.data.dotkiemtraTĐ });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // context data
  const DotKiemTraTĐContextData = {
    dotkiemtraTĐState,
    getDotKiemTraTĐs,
    showThemDotKiemTraTĐ,
    setShowThemDotKiemTraTĐ,
    addDotKiemTraTĐ,
    showToast,
    setShowToast,
    deleteDotKiemTraTĐ,
    dotkiemtraTĐ,
    setDotKiemTraTĐ,
    updateDotKiemTraTĐ,
    showSuaDotKiemTraTĐ,
    setShowSuaDotKiemTraTĐ,
    findDotKiemTraTĐ,
  };

  return (
    <DotKiemTraTĐContext.Provider value={DotKiemTraTĐContextData}>
      {children}
    </DotKiemTraTĐContext.Provider>
  );
};

export default DotKiemTraTĐContextProvider;
