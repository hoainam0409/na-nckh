import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ThemSP from "./ThemSP";


const SanPham = () => {

  const [showThemSP, setShowThemSP] = useState(false);


  return (
    <div>
      <h1>SẢN PHẨM VÀ ỨNG DỤNG</h1>
      <div className="loaisanpham">
        <h2>Sản phẩm khoa học </h2>
        <div className="sanpham">
          <div>
            <h3>Bài báo, báo cáo</h3>
            <Button onClick={() => setShowThemSP(true)}>Thêm mới</Button>
            <ThemSP show={showThemSP}
              onHide={() => setShowThemSP(false)} />
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Loại bài báo, báo cáo</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
          <div>
            <h3>Sách, giáo trình khoa học</h3>
            <Button onClick={() => setShowThemSP(true)}>Thêm mới</Button>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Loại sách, giáo trình khoa học</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
          <div>
            <h3>Sản phẩm khoa học khác</h3>
            <Button>Thêm mới</Button>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Loại sản phẩm khoa học khác</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="loaisanpham">
        <h2>Sản phẩm đào tạo </h2>
        <Button>Thêm mới</Button>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Loại sản phẩm</th>
              <th>Số lượng</th>
              <th>Mô tả</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      <div className="loaisanpham">
        <h2>Sản phẩm ứng dụng </h2>
        <Button>Thêm mới</Button>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Loại sản phẩm</th>
              <th>Số lượng</th>
              <th>Mô tả</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      <div className="loaisanpham">
        <h2>Sản phẩm khác</h2>
        <Button>Thêm mới</Button>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Loại sản phẩm</th>
              <th>Số lượng</th>
              <th>Mô tả</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default SanPham;
