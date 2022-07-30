import {
  LOAIDETAI_LOADED_SUCCESS,
  LOAIDETAI_LOADED_FAIL,
  LOAIDETAI_ADD,
  DELETE_LOAIDETAI,
  FIND_LOAIDETAI,
  UPDATE_LOAIDETAI,
} from "../contexts/constant";

export const loaiĐTReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
      case LOAIDETAI_LOADED_SUCCESS:
        return {
          ...state,
          loaiĐTs: payload,
          loaiĐTsLoading: false,
        };
      case LOAIDETAI_LOADED_FAIL:
        return {
          ...state,
          loaiĐTs: [],
          loaiĐTsLoading: false,
        };
      case LOAIDETAI_ADD:
        return {
          ...state,
          loaiĐTs: [...state.loaiĐTs, payload],
        };
      case DELETE_LOAIDETAI:
        return {
          ...state,
          loaiĐTs: state.loaiĐTs.filter(
            (loaiĐT) => loaiĐT._id !== payload
          ),
        };
      case FIND_LOAIDETAI:
        return { ...state, loaiĐT: payload };
  
      case UPDATE_LOAIDETAI:
        const newloaiĐTs = state.loaiĐTs.map((loaiĐT) =>
        loaiĐT._id === payload._id ? payload : loaiĐT
        );
      return {
        ...state,
        loaiĐTs: newloaiĐTs,
      };
    default:
      return state;
  }
};