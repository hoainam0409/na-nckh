import {
  VAITROTG_LOADED_FAIL,
  VAITROTG_LOADED_SUCCESS, 
  VAITROTG_ADD,
  DELETE_VAITROTG,
  UPDATE_VAITROTG,
  FIND_VAITROTG,
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
      case VAITROTG_ADD:
      return {
        ...state,
        vaitroTGs: [...state.vaitroTGs, payload],
      };
    case DELETE_VAITROTG:
      return {
        ...state,
        vaitroTGs: state.vaitroTGs.filter(
          (vaitroTG) => vaitroTG._id !== payload
        ),
      };
    case FIND_VAITROTG:
      return { ...state, vaitroTG: payload };

    case UPDATE_VAITROTG:
      const newvaitroTGs = state.vaitroTGs.map((vaitroTG) =>
      vaitroTG._id === payload._id ? payload : vaitroTG
      );
      return {
        ...state,
        vaitroTGs: newvaitroTGs,
      };
    default:
      return state;
  }
};
