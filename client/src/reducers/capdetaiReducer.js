import {
  CAPDETAI_LOADED_SUCCESS,
  CAPDETAI_LOADED_FAIL,
  CAPDETAI_ADD,
  DELETE_CAPDETAI,
  FIND_CAPDETAI,
  UPDATE_CAPDETAI,

  LOAIDETAI_LOADED_SUCCESS,
  LOAIDETAI_LOADED_FAIL,
  LOAIDETAI_ADD,
  DELETE_LOAIDETAI,
  FIND_LOAIDETAI,
  UPDATE_LOAIDETAI,
} from "../contexts/constant";

export const capdetaiReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CAPDETAI_LOADED_SUCCESS:
      return {
        ...state,
        capdetais: payload,
        capdetaisLoading: false,
      };
    case CAPDETAI_LOADED_FAIL:
      return {
        ...state,
        capdetais: [],
        capdetaisLoading: false,
      };
    case CAPDETAI_ADD:
      return {
        ...state,
        capdetais: [...state.capdetais, payload],
      };
    case DELETE_CAPDETAI:
      return {
        ...state,
        capdetais: state.capdetais.filter(
          (capdetai) => capdetai._id !== payload
        ),
      };
    case FIND_CAPDETAI:
      return { ...state, capdetai: payload };

    case UPDATE_CAPDETAI:
      const newcapdetais = state.capdetais.map((capdetai) =>
        capdetai._id === payload._id ? payload : capdetai
      );
      return {
        ...state,
        loaiĐTs: newcapdetais,
      };
    default:
      return state;
  }
};
