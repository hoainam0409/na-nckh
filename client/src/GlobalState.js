import React, {createContext, useState, useEffect} from 'react'
import UserAPI from './api/userAPI'
import ThongbaochungsAPI from './api/ThongbaochungAPI'
import { apiUrl } from "./contexts/constant";

import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)


    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get(`${apiUrl}/user/refresh_token`) // lỗi???
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])


    
    const state = {
        token: [token, setToken],
        userAPI: UserAPI(token),
        thongbaochungsAPI: ThongbaochungsAPI()

    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}