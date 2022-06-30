import {
  HOIDONG_LOADED_SUCCESS,
  HOIDONG_LOADED_FAIL,
  HOIDONG_ADD,
  DELETE_HOIDONG,
  FIND_HOIDONG,
  UPDATE_HOIDONG,
} from "../contexts/constant";

export const hoidongReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOIDONG_LOADED_SUCCESS:
      return {
        ...state,
        hoidongs: payload,
        hoidongsLoading: false,
      };
    case HOIDONG_LOADED_FAIL:
      return {
        ...state,
        hoidongs: [],
        hoidongsLoading: false,
      };
    case HOIDONG_ADD:
      return {
        ...state,
        hoidongs: [...state.hoidongs, payload],
      };
    case DELETE_HOIDONG:
      return {
        ...state,
        hoidongs: state.hoidongs.filter(
          (hoidong) => hoidong._id !== payload
        ),
      };
    case FIND_HOIDONG:
      return { ...state, hoidong: payload };

    case UPDATE_HOIDONG:
      const newhoidongs = state.hoidongs.map((hoidong) =>
        hoidong._id === payload._id ? payload : hoidong
      );
      return {
        ...state,
        hoidongs: newhoidongs,
      };
    default:
      return state;
  }
};
