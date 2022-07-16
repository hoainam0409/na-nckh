import { createContext, useReducer, useState } from "react";
import { detaiCBReducer } from "../reducers/detaiCBReducer";
import axios from "axios";
import {
  apiUrl,
  DETAICB_LOADED_SUCCESS,
  DETAICB_LOADED_FAIL,
  DETAICB_ADD,
  DELETE_DETAICB,
  FIND_DETAICB,
  UPDATE_DETAICB,
} from "./constant";

export const DeTaiCBContext = createContext();

const DeTaiCBContextProvider = ({ children }) => {
  // State
  const [detaicbState, dispatch] = useReducer(detaiCBReducer, {
    detaicb: null,
    detaicbs: [],
    detaicbsLoading: true,
  });

  const [showThemDeTaiCB, setShowThemDeTaiCB] = useState(false);
  const [showSuaDeTaiCB, setShowSuaDeTaiCB] = useState(false);
  const [showXemDeTaiCB, setShowXemDeTaiCB] = useState(false);
  const [showNhapKQHĐ, setShowNhapKQHĐ] = useState(false);
  const [showCapNhatThuyetMinh, setShowCapNhatThuyetMinh] = useState(false);
  const [showNhapKQĐG, setShowNhapKQĐG] = useState(false);
  const [showNhapKQNT, setShowNhapKQNT] = useState(false);
  const [showBaoCaoTienDo, setShowBaoCaoTienDo] = useState(false);

  const [showThemSP, setShowThemSP] = useState(false);


  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });

  const [detaicb, setDeTaiCB] = useState("");

  const [trangThai, setTrangThai] = useState("Đăng ký")

  const updateTrangThai = (newTrangThai) => {
    setTrangThai(newTrangThai);
  };  

  // Lấy tất cả
  const getDeTaiCBs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/detai-canbo/dangky`);
      if (response.data.success) {
        dispatch({
          type: DETAICB_LOADED_SUCCESS,
          payload: response.data.detaicbs,
        });
      }
    } catch (error) {
      dispatch({ type: DETAICB_LOADED_FAIL });
    }
  };

  //Thêm mới 
  const addDeTaiCB = async (newDeTaiCB) => {
    try {
      newDeTaiCB.thanhvienthamgia.push(
        {
          id: newDeTaiCB.user1._id,
          hovaten: newDeTaiCB.user1.hovaten,
          vaitrothamgia: newDeTaiCB.vaitrothamgia1,
          chucdanhKH: newDeTaiCB.chucdanhKH1,
          donvi: newDeTaiCB.donvi1
        },
        {
          id: newDeTaiCB.user2._id,
          hovaten: newDeTaiCB.user2.hovaten,
          vaitrothamgia: newDeTaiCB.vaitrothamgia2,
          chucdanhKH: newDeTaiCB.chucdanhKH2,
          donvi: newDeTaiCB.donvi2
        }
      );
      const response = await axios.post(
        `${apiUrl}/detai-canbo/dangky`,
        newDeTaiCB
      );
      if (response.data.success) {
        dispatch({ type: DETAICB_ADD, payload: response.data.detaicb });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa 
  const deleteDeTaiCB = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/detai-canbo/dangky/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_DETAICB, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findDeTaiCB = (detaicbId) => {
    const detaicb = detaicbState.detaicbs.find(
      (detaicb) => detaicb._id === detaicbId
    );
    dispatch({ type: FIND_DETAICB, payload: detaicb });
  };

  // Chỉnh sửa
  const updateDeTaiCB = async (updatedDeTaiCB) => {
    try {

      const response = await axios.put(
        `${apiUrl}/detai-canbo/dangky/${updatedDeTaiCB._id}`,
        updatedDeTaiCB
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_DETAICB, payload: response.data.detaicb });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };


  // context data
  const DeTaiCBContextData = {
    detaicbState,
    getDeTaiCBs,
    showThemDeTaiCB,
    setShowThemDeTaiCB,
    addDeTaiCB,
    showToast,
    setShowToast,
    deleteDeTaiCB,
    detaicb,
    setDeTaiCB,
    updateDeTaiCB,
    showSuaDeTaiCB,
    setShowSuaDeTaiCB,
    findDeTaiCB,
    showNhapKQĐG,
    setShowNhapKQĐG,
    showNhapKQHĐ,
    setShowNhapKQHĐ,
    trangThai, 
    updateTrangThai,
    showNhapKQNT,
    setShowNhapKQNT,
    showBaoCaoTienDo, 
    setShowBaoCaoTienDo,
    showXemDeTaiCB, 
    setShowXemDeTaiCB,
    showCapNhatThuyetMinh,
    setShowCapNhatThuyetMinh,
    showThemSP, setShowThemSP
  };

  return (
    <DeTaiCBContext.Provider value={DeTaiCBContextData}>
      {children}
    </DeTaiCBContext.Provider>
  );
};

export default DeTaiCBContextProvider;
