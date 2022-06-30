import {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from "../contexts/constant";

function LoaiHoiDongsAPI() {
    const [loaiHoiDongs, setLoaiHoiDongs] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getLoaiHoiDongs = async () =>{
            const response = await axios.get(`${apiUrl}/danhmuc/loai-hoi-dong`)
            setLoaiHoiDongs(response.data)
        }

        getLoaiHoiDongs()
    },[callback])
    return {
        loaiHoiDongs: [loaiHoiDongs, setLoaiHoiDongs],
        callback: [callback, setCallback]
    }
}

export default LoaiHoiDongsAPI
