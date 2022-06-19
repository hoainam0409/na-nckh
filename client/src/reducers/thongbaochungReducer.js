import { TB_LOADED_SUCCESS, TB_LOADED_FAIL } from "../contexts/constant";

export const thongbaochungReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TB_LOADED_SUCCESS:
      return {
        ...state,
        thongbaochungs: payload,
        thongbaochungsLoading: false,
      };
    case TB_LOADED_FAIL:
      return {
        ...state,
        thongbaochungs: [],
        thongbaochungsLoading: false,
      };
    default:
      return state;
  }
};
