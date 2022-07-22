import {
  SANPHAMUD_LOADED_SUCCESS,
  SANPHAMUD_LOADED_FAIL,
  SANPHAMUD_ADD,
  DELETE_SANPHAMUD,
  FIND_SANPHAMUD,
  UPDATE_SANPHAMUD,
} from "../contexts/constant";

export const sanphamUDReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SANPHAMUD_LOADED_SUCCESS:
      return {
        ...state,
        sanphamUDs: payload,
        sanphamUDsLoading: false,
      };
    case SANPHAMUD_LOADED_FAIL:
      return {
        ...state,
        sanphamUDs: [],
        sanphamUDsLoading: false,
      };
    case SANPHAMUD_ADD:
      return {
        ...state,
        sanphamUDs: [...state.sanphamUDs, payload],
      };
    case DELETE_SANPHAMUD:
      return {
        ...state,
        sanphamUDs: state.sanphamUDs.filter(
          (sanphamUD) => sanphamUD._id !== payload
        ),
      };
    case FIND_SANPHAMUD:
      return { ...state, sanphamUD: payload };

    case UPDATE_SANPHAMUD:
      const newsanphamUDs = state.sanphamUDs.map((sanphamUD) =>
      sanphamUD._id === payload._id ? payload : sanphamUD
      );
      return {
        ...state,
        sanphamUDs: newsanphamUDs,
      };
    default:
      return state;
  }
};
