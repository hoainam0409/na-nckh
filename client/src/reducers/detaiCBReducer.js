import {
    DETAICB_LOADED_SUCCESS,
    DETAICB_LOADED_FAIL,
    DETAICB_ADD,
    DELETE_DETAICB,
    FIND_DETAICB,
    UPDATE_DETAICB,
    UPDATE_TRANGTHAI,
  } from "../contexts/constant";
  
  export const detaiCBReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case DETAICB_LOADED_SUCCESS:
        return {
          ...state,
          detaicbs: payload,
          detaicbsLoading: false,
        };
      case DETAICB_LOADED_FAIL:
        return {
          ...state,
          detaicbs: [],
          detaicbsLoading: false,
        };
      case DETAICB_ADD:
        return {
          ...state,
          detaicbs: [...state.detaicbs, payload],
        };
      case DELETE_DETAICB:
        return {
          ...state,
          detaicbs: state.detaicbs.filter(
            (detaicb) => detaicb._id !== payload
          ),
        };
      case FIND_DETAICB:
        return { ...state, detaicb: payload };
  
      case UPDATE_DETAICB:
        const newdetaicbs = state.detaicbs.map((detaicb) =>
        detaicb._id === payload._id ? payload : detaicb
        );
        return {
          ...state,
          detaicbs: newdetaicbs,
        };
        // case UPDATE_TRANGTHAI:
        //   const newtrangthai = state.detaicbs.map((detaicb) =>
        //   detaicb._id === payload._id ? payload : detaicb
        //   );
        //   return {
        //     ...state,
        //     detaicbs: newdetaicbs,
        //   };
      default:
        return state;
    }
  };
  