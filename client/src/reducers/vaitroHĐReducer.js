import {
  VAITROHĐ_LOADED_FAIL,
  VAITROHĐ_LOADED_SUCCESS
} from "../contexts/constant";

export const vaitroHĐReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VAITROHĐ_LOADED_SUCCESS:
      return {
        ...state,
        vaitroHĐs: payload,
        vaitroHĐsLoading: false,
      };
    case VAITROHĐ_LOADED_FAIL:
      return {
        ...state,
        vaitroHĐs: [],
        vaitroHĐsLoading: false,
      };
    default:
      return state;
  }
};
