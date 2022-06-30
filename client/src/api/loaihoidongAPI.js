import {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from "../contexts/constant";

function LoaiHĐsAPI() {
    const [LoaiHĐs, setLoaiHĐs] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getLoaiHĐs = async () =>{
            const response = await axios.get(`${apiUrl}/danhmuc/loai-hoi-dong`)
            setLoaiHĐs(response.data)
        }

        getLoaiHĐs()
    },[callback])
    return {
        LoaiHĐs: [LoaiHĐs, setLoaiHĐs],
        callback: [callback, setCallback]
    }
}

export default LoaiHĐsAPI
