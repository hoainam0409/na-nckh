import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const SanPham = () => {
    return (
        <div>
            <h1>SẢN PHẨM VÀ ỨNG DỤNG</h1>
            <div className="loaisanpham">
                <h2>Sản phẩm khoa học </h2>
                <div className="sanpham">
                    <div><h3>Bài báo, báo cáo</h3>
                        <Table borderless bordered hover style={{ cursor: "pointer" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        STT
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Loại bài báo, báo cáo
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Số lượng
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Mô tả
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Chức năng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>

                    </div>
                    <div> <h3>Sách, giáo trình khoa học</h3>
                        <Table borderless bordered hover style={{ cursor: "pointer" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        STT
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Loại sách, giáo trình khoa học
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Số lượng
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Mô tả
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Chức năng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>
                    </div>
                    <div><h3>Sản phẩm khoa học khác</h3>
                        <Table borderless bordered hover style={{ cursor: "pointer" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        STT
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Loại sản phẩm khoa học khác
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Số lượng
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Mô tả
                                    </th>
                                    <th style={{ textAlign: "center", color: "#495057" }}>
                                        Chức năng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="loaisanpham">
                <h2>Sản phẩm đào tạo </h2>
                <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                STT
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Loại sản phẩm
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Số lượng
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Mô tả
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Chức năng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>

            </div>
            <div className="loaisanpham">
                <h2>Sản phẩm ứng dụng </h2>
                <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                STT
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Loại sản phẩm
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Số lượng
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Mô tả
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Chức năng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
            <div className="loaisanpham">
                <h2>Sản phẩm khác</h2>
                <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                STT
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Loại sản phẩm
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Số lượng
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Mô tả
                            </th>
                            <th style={{ textAlign: "center", color: "#495057" }}>
                                Chức năng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SanPham