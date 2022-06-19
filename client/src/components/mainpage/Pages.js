import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../auth/Login'
import Home from './home-nckh/Home-nckh'
import Landing from '../layout/Landing'
import DanhSachThongBao from '../mainpage/quanlythongbao/DanhSachThongBao'
// import ProtectedRoute from '../routing/ProtectedRoute'


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route exact  path="/login" element={<Login/>}></Route>
        <Route exact path="/nckh/dashboard" element={<Home/>}></Route>
        <Route exact path="/nckh/quanly-thongbao" element={<DanhSachThongBao/>}></Route>

        {/* <ProtectedRoute exact path='/nckh/dashboard' element= {<Home/>}></ProtectedRoute> */}

    </Routes>
  )
}

export default Pages
