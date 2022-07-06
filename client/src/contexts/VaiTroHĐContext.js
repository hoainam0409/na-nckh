import { createContext, useReducer} from "react";
import { vaitroHĐReducer } from "../reducers/vaitroHĐReducer";
import axios from "axios";
import {
  apiUrl,
  VAITROHĐ_LOADED_FAIL,
  VAITROHĐ_LOADED_SUCCESS,
} from "./constant";

export const VaiTroHĐContext = createContext();

const VaiTroHĐContextProvider = ({ children }) => {
  // State
  const [vaitroHĐState, dispatch] = useReducer(vaitroHĐReducer, {
    vaitroHĐ: null,
    vaitroHĐs: [],
    vaitroHĐsLoading: true,
  });

  // Lấy tất cả các vaitroHĐ
  const getVaiTroHĐs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/danhmuc/vaitro-hoidong`);
      if (response.data.success) {
        dispatch({
          type: VAITROHĐ_LOADED_SUCCESS,
          payload: response.data.vaitroHĐs,
        });
      }
    } catch (error) {
      dispatch({ type: VAITROHĐ_LOADED_FAIL });
    }
  };

  //  context data
  const VaiTroHĐContextData = {
    vaitroHĐState,
    getVaiTroHĐs,
  };

  return (
    <VaiTroHĐContext.Provider value={VaiTroHĐContextData}>
      {children}
    </VaiTroHĐContext.Provider>
  );
};

export default VaiTroHĐContextProvider;
