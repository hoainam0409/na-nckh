import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { authState, dispatch } = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  //Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.sccessToken
        );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  //context data
const authContextData = {loginUser}

//return Provider
return(
    <AuthContext.Provider value = {authContextData}>
        {children}
    </AuthContext.Provider>
)
};
export default AuthContextProvider
