import {
  DOTDANGKY_LOADED_SUCCESS,
  DOTDANGKY_LOADED_FAIL,
  DOTDANGKY_ADD,
  DELETE_DOTDANGKY,
  FIND_DOTDANGKY,
  UPDATE_DOTDANGKY,
} from "../contexts/constant";

export const dotdangkyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DOTDANGKY_LOADED_SUCCESS:
      return {
        ...state,
        dotdangkys: payload,
        dotdangkysLoading: false,
      };
    case DOTDANGKY_LOADED_FAIL:
      return {
        ...state,
        dotdangkys: [],
        dotdangkysLoading: false,
      };
    case DOTDANGKY_ADD:
      return {
        ...state,
        dotdangkys: [...state.dotdangkys, payload],
      };
    case DELETE_DOTDANGKY:
      return {
        ...state,
        dotdangkys: state.dotdangkys.filter(
          (dotdangky) => dotdangky._id !== payload
        ),
      };
    case FIND_DOTDANGKY:
      return { ...state, dotdangky: payload };

    case UPDATE_DOTDANGKY:
      const newdotdangkys = state.dotdangkys.map((dotdangky) =>
        dotdangky._id === payload._id ? payload : dotdangky
      );
      return {
        ...state,
        dotdangkys: newdotdangkys,
      };
    default:
      return state;
  }
};
