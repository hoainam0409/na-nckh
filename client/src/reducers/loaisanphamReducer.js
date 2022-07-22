import {
  LOAISP_LOADED_SUCCESS,
  LOAISP_LOADED_FAIL,
  LOAISP_ADD,
  DELETE_LOAISP,
  FIND_LOAISP,
  UPDATE_LOAISP,
} from "../contexts/constant";

export const loaisanphamReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAISP_LOADED_SUCCESS:
      return {
        ...state,
        loaisanphams: payload,
        loaisanphamsLoading: false,
      };
    case LOAISP_LOADED_FAIL:
      return {
        ...state,
        loaisanphams: [],
        loaisanphamsLoading: false,
      };
    case LOAISP_ADD:
      return {
        ...state,
        loaisanphams: [...state.loaisanphams, payload],
      };
    case DELETE_LOAISP:
      return {
        ...state,
        loaisanphams: state.loaisanphams.filter(
          (loaisanpham) => loaisanpham._id !== payload
        ),
      };
    case FIND_LOAISP:
      return { ...state, loaisanpham: payload };

    case UPDATE_LOAISP:
      const newloaisanphams = state.loaisanphams.map((loaisanpham) =>
      loaisanpham._id === payload._id ? payload : loaisanpham
      );
      return {
        ...state,
        loaisanphams: newloaisanphams,
      };
    default:
      return state;
  }
};
