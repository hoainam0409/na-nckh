import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../auth/Login'
import Home from './home-nckh/Home-nckh'
import Landing from '../layout/Landing'
import DanhSachThongBao from '../mainpage/quanlythongbao/DanhSachThongBao'
import Thongtincanhan from './thongtincanhan/Thongtincanhan'
import DanhSachCapDeTai from './dm-capdetai/DanhSachCapDeTai'
import DanhSachDotDangKy from './dotdangky/DanhSachDotDangKy'
import DanhSachDeTaiSV from './dangky-sv/DanhSachDeTaiSV'
// import ProtectedRoute from '../routing/ProtectedRoute'


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route exact  path="/login" element={<Login/>}></Route>
        <Route exact path="/nckh/dashboard" element={<Home/>}></Route>
        <Route exact path="/nckh/quanly-thongbao" element={<DanhSachThongBao/>}></Route>
        <Route exact path="/nckh/thongtin-canhan" element={<Thongtincanhan/>}></Route>
        <Route exact path="/danhmuc/capdetai" element={<DanhSachCapDeTai/>}></Route>
        <Route exact path="/nckh/dotdangky-detai" element={<DanhSachDotDangKy/>}></Route>
        <Route exact path="/nckh/detai-sinhvien/dangky" element={<DanhSachDeTaiSV/>}></Route>

        {/* <ProtectedRoute exact path='/nckh/dashboard' element= {<Home/>}></ProtectedRoute> */}

    </Routes>
  )
}

export default Pages
