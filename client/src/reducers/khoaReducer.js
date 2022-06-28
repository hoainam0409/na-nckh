import {
  KHOA_LOADED_FAIL,
  KHOA_LOADED_SUCCESS,
  KHOA_ADD, 
  DELETE_KHOA, 
  UPDATE_KHOA, 
  FIND_KHOA 
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
    case KHOA_ADD:
      return {
        ...state,
        khoas: [...state.khoas, payload],
      };
    case DELETE_KHOA:
      return {
        ...state,
        khoas: state.khoas.filter(
          (khoa) => khoa._id !== payload
        ),
      };
    case FIND_KHOA:
      return { ...state, khoa: payload };

    case UPDATE_KHOA:
      const newkhoas = state.khoas.map((khoa) =>
        khoa._id === payload._id ? payload : khoa
      );
      return {
        ...state,
        khoas: newkhoas,
      };
    default:
      return state;
  }
};
