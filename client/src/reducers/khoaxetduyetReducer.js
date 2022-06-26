import {
  KHOAXETDUYET_LOADED_SUCCESS,
  KHOAXETDUYET_LOADED_FAIL,

} from "../contexts/constant";

export const khoaxetduyetReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case KHOAXETDUYET_LOADED_SUCCESS:
      return {
        ...state,
        khoaxetduyets: payload,
        khoaxetduyetsLoading: false,
      };
    case KHOAXETDUYET_LOADED_FAIL:
      return {
        ...state,
        khoaxetduyets: [],
        khoaxetduyetsLoading: false,
      };
    default:
      return state;
  }
};
