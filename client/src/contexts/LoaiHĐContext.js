import { createContext, useReducer} from "react";
import { loaiHĐReducer } from "../reducers/loaiHĐReducer";
import axios from "axios";
import {
  apiUrl,
  LOAIHĐ_LOADED_FAIL,
  LOAIHĐ_LOADED_SUCCESS,
} from "./constant";

export const LoaiHĐContext = createContext();

const LoaiHĐContextProvider = ({ children }) => {
  // State
  const [loaiHĐState, dispatch] = useReducer(loaiHĐReducer, {
    loaiHĐ: null,
    loaiHĐs: [],
    loaiHĐsLoading: true,
  });

  // Lấy tất cả các LoaiHĐ
  const getLoaiHĐs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/loai-hoi-dong`);
      if (response.data.success) {
        dispatch({
          type: LOAIHĐ_LOADED_SUCCESS,
          payload: response.data.loaiHĐs,
        });
      }
    } catch (error) {
      dispatch({ type: LOAIHĐ_LOADED_FAIL });
    }
  };

  //  context data
  const LoaiHĐContextData = {
    loaiHĐState,
    getLoaiHĐs,
  };

  return (
    <LoaiHĐContext.Provider value={LoaiHĐContextData}>
      {children}
    </LoaiHĐContext.Provider>
  );
};

export default LoaiHĐContextProvider;
