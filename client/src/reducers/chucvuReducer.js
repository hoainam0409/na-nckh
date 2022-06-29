import {
  CHUCVU_LOADED_FAIL,
  CHUCVU_LOADED_SUCCESS
} from "../contexts/constant";

export const chucvuReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHUCVU_LOADED_SUCCESS:
      return {
        ...state,
        chucvus: payload,
        chucvusLoading: false,
      };
    case CHUCVU_LOADED_FAIL:
      return {
        ...state,
        chucvus: [],
        chucvusLoading: false,
      };
    default:
      return state;
  }
};
