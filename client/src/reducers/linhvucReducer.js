import {
  LINHVUC_LOADED_SUCCESS,
  LINHVUC_LOADED_FAIL,
  LINHVUC_ADD,
  DELETE_LINHVUC,
  FIND_LINHVUC,
  UPDATE_LINHVUC,
} from "../contexts/constant";

export const linhvucReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LINHVUC_LOADED_SUCCESS:
      return {
        ...state,
        linhvucs: payload,
        linhvucsLoading: false,
      };
    case LINHVUC_LOADED_FAIL:
      return {
        ...state,
        linhvucs: [],
        linhvucsLoading: false,
      };
    case LINHVUC_ADD:
      return {
        ...state,
        linhvucs: [...state.linhvucs, payload],
      };
    case DELETE_LINHVUC:
      return {
        ...state,
        linhvucs: state.linhvucs.filter(
          (linhvuc) => linhvuc._id !== payload
        ),
      };
    case FIND_LINHVUC:
      return { ...state, linhvuc: payload };

    case UPDATE_LINHVUC:
      const newlinhvucs = state.linhvucs.map((linhvuc) =>
        linhvuc._id === payload._id ? payload : linhvuc
      );
      return {
        ...state,
        linhvucs: newlinhvucs,
      };
    default:
      return state;
  }
};
