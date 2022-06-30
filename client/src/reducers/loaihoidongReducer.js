import {
  KHOA_LOADED_FAIL,
  KHOA_LOADED_SUCCESS
} from "../contexts/constant";

export const khoaReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case KHOA_LOADED_SUCCESS:
      return {
        ...state,
        khoas: payload,
        khoasLoading: false,
      };
    case KHOA_LOADED_FAIL:
      return {
        ...state,
        khoas: [],
        khoasLoading: false,
      };
    default:
      return state;
  }
};
