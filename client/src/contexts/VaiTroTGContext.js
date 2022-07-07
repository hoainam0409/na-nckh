import { createContext, useReducer} from "react";
import { vaitroTGReducer } from "../reducers/vaitroTGReducer";
import axios from "axios";
import {
  apiUrl,
  VAITROTG_LOADED_FAIL,
  VAITROTG_LOADED_SUCCESS,
} from "./constant";

export const VaiTroTGContext = createContext();

const VaiTroTGContextProvider = ({ children }) => {
  // State
  const [vaitroTGState, dispatch] = useReducer(vaitroTGReducer, {
    vaitroTG: null,
    vaitroTGs: [],
    vaitroTGsLoading: true,
  });

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

  //  context data
  const VaiTroTGContextData = {
    vaitroTGState,
    getVaiTroTGs,
  };

  return (
    <VaiTroTGContext.Provider value={VaiTroTGContextData}>
      {children}
    </VaiTroTGContext.Provider>
  );
};

export default VaiTroTGContextProvider;
