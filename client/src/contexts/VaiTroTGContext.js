import { createContext, useReducer, useState} from "react";
import { vaitroTGReducer } from "../reducers/vaitroTGReducer";
import axios from "axios";
import {
  apiUrl,
  VAITROTG_LOADED_FAIL,
  VAITROTG_LOADED_SUCCESS, 
  VAITROTG_ADD,
  DELETE_VAITROTG,
  UPDATE_VAITROTG,
  FIND_VAITROTG,
} from "./constant";

export const VaiTroTGContext = createContext();

const VaiTroTGContextProvider = ({ children }) => {
  // State
  const [vaitroTGState, dispatch] = useReducer(vaitroTGReducer, {
    vaitroTG: null,
    vaitroTGs: [],
    vaitroTGsLoading: true,
  });
  const [showThemVaiTroTG, setShowThemVaiTroTG] = useState(false);
  const [showSuaVaiTroTG, setShowSuaVaiTroTG] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [vaitroTG, setVaiTroTG] = useState("");

  // Lấy tất cả các vaitroTG
  const getVaiTroTGs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/vaitro-thamgia`);
      if (response.data.success) {
        dispatch({
          type: VAITROTG_LOADED_SUCCESS,
          payload: response.data.vaitroTGs,
        });
      }
    } catch (error) {
      dispatch({ type: VAITROTG_LOADED_FAIL });
    }
  };

 //Thêm mới
 const addVaiTroTG = async (newVaiTroTG) => {
  try {
    const response = await axios.post(
      `${apiUrl}/danhmuc/vaitro-thamgia`,
      newVaiTroTG
    );
    if (response.data.success) {
      dispatch({ type: VAITROTG_ADD, payload: response.data.vaitroTG});
      return response.data;
    }
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, mesage: "Server error" };
  }
};

//Xóa 
const deleteVaiTroTG = async (id) => {
  try {
    const response = await axios.delete(
      `${apiUrl}/danhmuc/vaitro-thamgia/${id}`
    );
    if (response.data.success) dispatch({ type: DELETE_VAITROTG, payload: id });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data
      ? error.response.data
      : { success: false, mesage: "Server error" };
  }
};

// Tìm 
const findVaiTroTG = (vaitroTGId) => {
  const vaitroTG = vaitroTGState.vaitroTGs.find(
    (vaitroTG) => vaitroTG._id === vaitroTGId
  );
  dispatch({ type: FIND_VAITROTG, payload: vaitroTG });
};

// Chỉnh sửa 
const updateVaiTroTG = async (updatedVaiTroTG) => {
  try {
    const response = await axios.put(
      `${apiUrl}/danhmuc/vaitro-thamgia/${updatedVaiTroTG._id}`,
      updatedVaiTroTG
    );
    if (response.data.success) {
      dispatch({ type: UPDATE_VAITROTG, payload: response.data.vaitroTG });
      return response.data;
    }
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, message: "Server error" };
  }
};
  //  context data
  const VaiTroTGContextData = {
    vaitroTGState,
    getVaiTroTGs,
    showThemVaiTroTG,
    setShowThemVaiTroTG,
    addVaiTroTG,
    showToast,
    setShowToast,
    deleteVaiTroTG,
    vaitroTG,
    setVaiTroTG,
    updateVaiTroTG,
    showSuaVaiTroTG,
    setShowSuaVaiTroTG,
    findVaiTroTG,
  };

  return (
    <VaiTroTGContext.Provider value={VaiTroTGContextData}>
      {children}
    </VaiTroTGContext.Provider>
  );
};

export default VaiTroTGContextProvider;
