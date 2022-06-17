import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../auth/Login'
// import Home from './home-nckh/Home-nckh'
import DanhSachThongBao from './quanlythongbao/DanhSachThongBao'
import ChiTietThongBao from './quanlythongbao/ChiTietThongBao'
import Landing from '../layout/Landing'


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/nckh/dashboard" element={<Home/>}></Route> */}
        {/* <Route path="/nckh/quanly-thongbao" element={<DanhSachThongBao/>}></Route> */}
        {/* <Route path="/nckh/quanly-thongbao" element={<ChiTietThongBao/>}></Route> */}



    </Routes>
  )
}

export default Pages
