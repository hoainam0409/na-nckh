import {
  LOAIHĐ_LOADED_FAIL,
  LOAIHĐ_LOADED_SUCCESS
} from "../contexts/constant";

export const loaiHĐReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAIHĐ_LOADED_SUCCESS:
      return {
        ...state,
        loaiHĐs: payload,
        loaiHĐsLoading: false,
      };
    case LOAIHĐ_LOADED_FAIL:
      return {
        ...state,
        loaiHĐs: [],
        loaiHĐsLoading: false,
      };
    default:
      return state;
  }
};
