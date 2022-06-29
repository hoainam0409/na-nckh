import { createContext, useReducer} from "react";
import { chucvuReducer } from "../reducers/chucvuReducer";
import axios from "axios";
import {
  apiUrl,
  CHUCVU_LOADED_FAIL,
  CHUCVU_LOADED_SUCCESS,
} from "./constant";

export const ChucVuContext = createContext();

const ChucVuContextProvider = ({ children }) => {
  // State
  const [chucvuState, dispatch] = useReducer(chucvuReducer, {
    chucvu: null,
    chucvus: [],
    chucvusLoading: true,
  });

  // Lấy tất cả các ChucVu
  const getChucVus = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/chucvu`);
      if (response.data.success) {
        dispatch({
          type: CHUCVU_LOADED_SUCCESS,
          payload: response.data.chucvus,
        });
      }
    } catch (error) {
      dispatch({ type: CHUCVU_LOADED_FAIL });
    }
  };

  //  context data
  const ChucVuContextData = {
    chucvuState,
    getChucVus,
  };

  return (
    <ChucVuContext.Provider value={ChucVuContextData}>
      {children}
    </ChucVuContext.Provider>
  );
};

export default ChucVuContextProvider;
