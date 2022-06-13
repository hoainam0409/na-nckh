import {createContext, useReducer} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'

export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const {authState, dispatch} = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    })
    //Login
    const loginUser = async useForm =>{
        try{
            const response = await axios.post()

        }catch(error){

        }
    }
}