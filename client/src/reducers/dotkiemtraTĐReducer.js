import {
  DOTKIEMTRATĐ_LOADED_SUCCESS,
  DOTKIEMTRATĐ_LOADED_FAIL,
  DOTKIEMTRATĐ_ADD,
  DELETE_DOTKIEMTRATĐ,
  FIND_DOTKIEMTRATĐ,
  UPDATE_DOTKIEMTRATĐ,
} from "../contexts/constant";

export const dotkiemtraTĐReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DOTKIEMTRATĐ_LOADED_SUCCESS:
      return {
        ...state,
        dotkiemtraTĐs: payload,
        dotkiemtraTĐsLoading: false,
      };
    case DOTKIEMTRATĐ_LOADED_FAIL:
      return {
        ...state,
        dotkiemtraTĐs: [],
        dotkiemtraTĐsLoading: false,
      };
    case DOTKIEMTRATĐ_ADD:
      return {
        ...state,
        dotkiemtraTĐs: [...state.dotkiemtraTĐs, payload],
      };
    case DELETE_DOTKIEMTRATĐ:
      return {
        ...state,
        dotkiemtraTĐs: state.dotkiemtraTĐs.filter(
          (dotkiemtraTĐ) => dotkiemtraTĐ._id !== payload
        ),
      };
    case FIND_DOTKIEMTRATĐ:
      return { ...state, dotkiemtraTĐ: payload };

    case UPDATE_DOTKIEMTRATĐ:
      const newdotkiemtraTĐs = state.dotkiemtraTĐs.map((dotkiemtraTĐ) =>
        dotkiemtraTĐ._id === payload._id ? payload : dotkiemtraTĐ
      );
      return {
        ...state,
        dotkiemtraTĐs: newdotkiemtraTĐs,
      };
    default:
      return state;
  }
};
