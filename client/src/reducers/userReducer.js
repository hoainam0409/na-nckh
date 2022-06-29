import {
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  USER_ADD,
  DELETE_USER,
  FIND_USER,
  UPDATE_USER,
} from "../contexts/constant";

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        users: payload,
        usersLoading: false,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        users: [],
        usersLoading: false,
      };
    case USER_ADD:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user._id !== payload
        ),
      };
    case FIND_USER:
      return { ...state, user: payload };

    case UPDATE_USER:
      const newusers = state.users.map((user) =>
        user._id === payload._id ? payload : user
      );
      return {
        ...state,
        users: newusers,
      };
    default:
      return state;
  }
};
