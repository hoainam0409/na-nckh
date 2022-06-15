import {useState, useEffect} from 'react'
import axios from 'axios'
import { apiUrl } from "../contexts/constant";


function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)


    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    await axios.get(`${apiUrl}/user/infor`, {
                    headers: {Authorization: token}
                    })
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])


    return {
        isLogged: [isLogged, setIsLogged],
    }
}

export default UserAPI
 