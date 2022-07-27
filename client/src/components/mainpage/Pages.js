import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../auth/Login'
import Home from './home-nckh/Home-nckh'
import Landing from '../layout/Landing'
import DanhSachThongBao from '../mainpage/quanlythongbao/DanhSachThongBao'
import Thongtincanhan from './thongtincanhan/Thongtincanhan'
import DanhSachDotDangKy from './dotdangky/DanhSachDotDangKy'
import DanhSachDeTaiSV from './dangky-sv/DanhSachDeTaiSV'
import DeTaiSVXacNhan from './detaisv-xacnhan/DeTaiSVXacNhan'
import DeTaiSVChoDuyet from './detaisv-choduyet/DeTaiSVChoDuyet'
import DanhSachDeTaiCB from './dangky-cb/DanhSachDeTaiCB'
import DanhSachDeTaiCBAll from './daguiduyet-cb/DanhSachDeTaiCB'
import DanhSachUser from './quanly-nguoidung/DanhSachUser'
import DeTaiChoDuyetKhoa from './duyetcapkhoa-cb/DeTaiChoDuyetCapKhoa'
import DeTaiNhapKQĐG from './nhapKQĐG-cb/DeTaiNhapKQĐG'
import DeTaiChoDuyetTruong from './duyetcaptruong-cb/DeTaiChoDuyetCapTruong'
import DeTaiRaQuyetDinh from './raquyetdinh-cb/DeTaiRaQuyetDinh'
import DeTaiKyHopDong from './kyhopdong-cb/DeTaiKyHopDong'
import DeTaiNhapKQNT from './nhapKQNT-cb/DeTaiNhapKQNT'
import DanhSachHoiDong from './quanlyhoidong/DanhSachHoiDong'
import DanhSachDotKiemTraTĐ from './dotkiemtratiendo/DanhSachDotKTTD'
import DeTaiDuyetGiaHan from './duyetgiahan-cb/DeTaiDuyetGiaHan'
import DeTaiDuyetThanhLy from './duyetthanhly-cb/DeTaiDuyetThanhLy'
import DuyetBaoCaoTienDo from './duyetbaocaotiendo-cb/DuyetBaoCaoTienDo'
import DeTaiDuyetNghiemThu from './duyetnghiemthu-cb/DeTaiDuyetNghiemThu'

import DanhSachBieuMau from './quanlybieumau/DanhSachBieuMau'


import DanhSachLinhVuc from './dm-linhvuc/DanhSachLinhVuc'
import DanhSachVaiTroTG from './dm- vaitroTG/DanhSachVaiTroTG'
import DanhSachCapDeTai from './dm-capdetai/DanhSachCapDeTai'
import DanhSachLoaiSP from './dm-loaisp/DanhSachLoaiSP'
import DanhSachSanPhamUD from './dm-sanphamungdung/DanhSachSanPhamUD'

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route exact  path="/login" element={<Login/>}></Route>
        <Route exact path="/nckh/dashboard" element={<Home/>}></Route>
        <Route exact path="/nckh/quanly-thongbao" element={<DanhSachThongBao/>}></Route>
        <Route exact path="/nckh/thongtin-canhan" element={<Thongtincanhan/>}></Route>
        <Route exact path="/danhmuc/capdetai" element={<DanhSachCapDeTai/>}></Route>
        <Route exact path="/danhmuc/linhvuc" element={<DanhSachLinhVuc/>}></Route>
        <Route exact path="/danhmuc/loai-san-pham" element={<DanhSachLoaiSP/>}></Route>
        <Route exact path="/danhmuc/loai-san-pham-ung-dung" element={<DanhSachSanPhamUD/>}></Route>
        <Route exact path="/danhmuc/vaitro-thamgia" element={<DanhSachVaiTroTG/>}></Route>
        <Route exact path="/detai/dotdangky" element={<DanhSachDotDangKy/>}></Route>
        <Route exact path="/detai-sinhvien/dangky" element={<DanhSachDeTaiSV/>}></Route>
        <Route exact path="/detai-sinhvien/cho-xac-nhan" element={<DeTaiSVXacNhan/>}></Route>
        <Route exact path="/detai-sinhvien/cho-duyet" element={<DeTaiSVChoDuyet/>}></Route>
        <Route exact path="/detai-canbo/dangky" element={<DanhSachDeTaiCB/>}></Route>
        <Route exact path="/detai-canbo/tat-ca-de-tai" element={<DanhSachDeTaiCBAll/>}></Route>
        <Route exact path="/detai-canbo/cho-duyet-cap-khoa" element={<DeTaiChoDuyetKhoa/>}></Route>
        <Route exact path="/detai-canbo/nhap-ket-qua-danh-gia" element={<DeTaiNhapKQĐG/>}></Route>
        <Route exact path="/detai-canbo/cho-duyet-cap-truong" element={<DeTaiChoDuyetTruong/>}></Route>
        <Route exact path="/detai-canbo/quyet-dinh-chu-tri" element={<DeTaiRaQuyetDinh/>}></Route>
        <Route exact path="/detai-canbo/ky-hop-dong" element={<DeTaiKyHopDong/>}></Route>
        <Route exact path="/detai-canbo/dot-kiem-tra-tien-do" element={<DanhSachDotKiemTraTĐ/>}></Route>
        <Route exact path="/detai-canbo/duyet-gia-han" element={<DeTaiDuyetGiaHan />}></Route>
        <Route exact path="/detai-canbo/duyet-thanh-ly" element={<DeTaiDuyetThanhLy />}></Route>
        <Route exact path="/detai-canbo/duyet-bao-cao-tien-do" element={<DuyetBaoCaoTienDo />}></Route>
        <Route exact path="/detai-canbo/duyet-nghiem-thu" element={<DeTaiDuyetNghiemThu />}></Route>
        <Route exact path="/detai-canbo/nhap-ket-qua-nghiem-thu" element={<DeTaiNhapKQNT/>}></Route>
        <Route exact path="/quanly/hoidong" element={<DanhSachHoiDong/>}></Route>

        <Route exact path="/quanly/bieumau/bookarks" element={<DanhSachBieuMau/>}></Route>
        <Route exact path="/user" element={<DanhSachUser/>}></Route>

    </Routes>
  )
}

export default Pages
