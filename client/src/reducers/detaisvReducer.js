import {
    DETAISV_LOADED_SUCCESS,
    DETAISV_LOADED_FAIL,
    DETAISV_ADD,
    DELETE_DETAISV,
    FIND_DETAISV,
    UPDATE_DETAISV,
  } from "../contexts/constant";
  
  export const capdetaiReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case DETAISV_LOADED_SUCCESS:
        return {
          ...state,
          detaisvs: payload,
          detaisvsLoading: false,
        };
      case DETAISV_LOADED_FAIL:
        return {
          ...state,
          detaisvs: [],
          detaisvsLoading: false,
        };
      case DETAISV_ADD:
        return {
          ...state,
          detaisvs: [...state.detaisvs, payload],
        };
      case DELETE_DETAISV:
        return {
          ...state,
          detaisvs: state.detaisvs.filter(
            (detaisv) => detaisv._id !== payload
          ),
        };
      case FIND_DETAISV:
        return { ...state, detaisv: payload };
  
      case UPDATE_DETAISV:
        const newdetaisvs = state.capdetais.map((detaisv) =>
        detaisv._id === payload._id ? payload : detaisv
        );
        return {
          ...state,
          detaisvs: newdetaisvs,
        };
      default:
        return state;
    }
  };
  