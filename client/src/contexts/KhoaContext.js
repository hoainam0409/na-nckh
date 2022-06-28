import { createContext, useReducer, useState } from "react";
import { khoaReducer } from "../reducers/khoaReducer";
import axios from "axios";
import {
  apiUrl,
  KHOA_LOADED_FAIL,
  KHOA_LOADED_SUCCESS,
  KHOA_ADD, 
  DELETE_KHOA, 
  UPDATE_KHOA, 
  FIND_KHOA 
} from "./constant";

export const KhoaContext = createContext();

const KhoaContextProvider = ({ children }) => {
  // State
  const [khoaState, dispatch] = useReducer(khoaReducer, {
    khoa: null,
    khoas: [],
    khoasLoading: true,
  });

  // Lấy tất cả các khoa
  const getKhoas = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/khoa`);
      if (response.data.success) {
        dispatch({
          type: KHOA_LOADED_SUCCESS,
          payload: response.data.khoas,
        });
      }
    } catch (error) {
      dispatch({ type: KHOA_LOADED_FAIL });
    }
  };

  //  context data
  const KhoaContextData = {
    khoaState,
    getKhoas,
  };

  return (
    <KhoaContext.Provider value={KhoaContextData}>
      {children}
    </KhoaContext.Provider>
  );
};

export default KhoaContextProvider;
