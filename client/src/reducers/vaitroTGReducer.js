import {
  VAITROTG_LOADED_FAIL,
  VAITROTG_LOADED_SUCCESS
} from "../contexts/constant";

export const vaitroTGReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VAITROTG_LOADED_SUCCESS:
      return {
        ...state,
        vaitroTGs: payload,
        vaitroTGsLoading: false,
      };
    case VAITROTG_LOADED_FAIL:
      return {
        ...state,
        vaitroTGs: [],
        vaitroTGsLoading: false,
      };
    default:
      return state;
  }
};
