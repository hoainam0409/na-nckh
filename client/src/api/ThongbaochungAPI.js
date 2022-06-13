import {useState, useEffect} from 'react'
import axios from 'axios'

function ThongbaochungsAPI() {
    const [thongbaochungs, setThongbaochungs] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getthongbaochungs = async () =>{
            const res = await axios.get('http://localhost:5000/thongbao/thongbaochung')
            setThongbaochungs(res.data)
        }

        getthongbaochungs()
    },[callback])
    return {
        thongbaochungs: [thongbaochungs, setThongbaochungs],
        callback: [callback, setCallback]
    }
}

export default ThongbaochungsAPI
