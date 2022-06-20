import {
  TB_LOADED_SUCCESS,
  TB_LOADED_FAIL,
  TB_ADD,
  DELETE_TB,
  FIND_TB,
  UPDATE_TB,
} from "../contexts/constant";

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
    case TB_ADD:
      return {
        ...state,
        thongbaochungs: [...state.thongbaochungs, payload],
      };
    case DELETE_TB:
      return {
        ...state,
        thongbaochungs: state.thongbaochungs.filter(
          (thongbaochung) => thongbaochung._id !== payload
        ),
      };
    case FIND_TB:
      return { ...state, thongbaochung: payload };

    case UPDATE_TB:
      const newThongBaoChungs = state.thongbaochungs.map((thongbaochung) =>
        thongbaochung._id === payload._id ? payload : thongbaochung
      );
      return {
        ...state,
        thongbaochungs: newThongBaoChungs,
      };
    default:
      return state;
  }
};
