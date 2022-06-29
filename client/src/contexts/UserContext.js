import { createContext, useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";
import axios from "axios";
import {
  apiUrl,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
  USER_ADD,
  DELETE_USER,
  UPDATE_USER,
  FIND_USER,
} from "./constant";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    usersLoading: true,
  });

  const [showThemUser, setShowThemUser] = useState(false);
  const [showSuaUser, setShowSuaUser] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [user, setUser] = useState("");

  // Lấy tất cả
  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/user`);
      if (response.data.success) {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: response.data.users,
        });
      }
    } catch (error) {
      dispatch({ type: USER_LOADED_FAIL });
    }
  };

  //Thêm mới cấp đề tài
  const addUser = async (newUser) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user`,
        newUser
      );
      if (response.data.success) {
        dispatch({ type: USER_ADD, payload: response.data.user});
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  //Xóa cấp đề tài
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/user/${id}`
      );
      if (response.data.success) dispatch({ type: DELETE_USER, payload: id });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, mesage: "Server error" };
    }
  };

  // Tìm khi thực hiện chỉnh sửa
  const findUser = (userId) => {
    const user = userState.users.find(
      (user) => user._id === userId
    );
    dispatch({ type: FIND_USER, payload: user });
  };

  // Chỉnh sửa 
  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `${apiUrl}/user/${updatedUser._id}`,
        updatedUser
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_USER, payload: response.data.user });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // thongbaochung context data
  const UserContextData = {
    userState,
    getUsers,
    showThemUser,
    setShowThemUser,
    addUser,
    showToast,
    setShowToast,
    deleteUser,
    user,
    setUser,
    updateUser,
    showSuaUser,
    setShowSuaUser,
    findUser,
  };

  return (
    <UserContext.Provider value={UserContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
