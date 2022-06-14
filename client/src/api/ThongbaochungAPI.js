import {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from '../contexts/constant'

function ThongbaochungsAPI() {
    const [thongbaochungs, setThongbaochungs] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() =>{
        const getthongbaochungs = async () =>{
            const res = await axios.get(`${apiUrl}/thongbao/thongbaochung?limit=${page*9}&${sort}&title[regex]=${search}`)
            setThongbaochungs(res.data)
        }

        getthongbaochungs()
    },[callback, sort, search, page])
    return {
        thongbaochungs: [thongbaochungs, setThongbaochungs],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
    }
}

export default ThongbaochungsAPI
