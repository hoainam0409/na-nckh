import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Home from './home-nckh/Home-nckh'
import VietThongBao from './quanlythongbao/VietThongBao'
import ChiTietThongBao from './quanlythongbao/ChiTietThongBao'


function Pages() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/nckh/dashboard" element={<Home/>}></Route>
        <Route path="/nckh/quanly-thongbao" element={<VietThongBao/>}></Route>
        <Route path="/nckh/quanly-thongbao" element={<ChiTietThongBao/>}></Route>



    </Routes>
  )
}

export default Pages
