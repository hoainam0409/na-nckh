import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ThongbaochungContext } from "../../../contexts/thongbaochungContext";
import { AuthContext } from "../../../contexts/AuthContext";


const Thongbaochungs = () =>{
  // Contexts
	// const {
	// 	authState: {
	// 		user: {username}
	// 	}
	// } = useContext(AuthContext)

	const {
		thongbaochungState: { thongbaochungs, thongbaochungsLoading },
		getThongbaochungs
	} = useContext(ThongbaochungContext)

  // Start: Get all 
	useEffect(() => getThongbaochungs(), [])
  return (
    <div style={{ margin: "10px 20px 20px 330px" }}>
      <h1
        style={{
          fontSize: "20px",
        }}
      >
        Danh sách thông báo
      </h1>
      <Button
        style={{
          marginTop: "70px",
          marginBottom: "20px",
          backgroundColor: "#337AB7",
          borderColor: "#2d6da3",
        }}
        
      >
        Thêm mới
      </Button>
      <Table borderless bordered hover style={{ cursor: "pointer" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center", color: "#495057" }}>Tiêu đề</th>
            <th style={{ textAlign: "center", color: "#495057" }}>
              Ngày thông báo
            </th>
            <th style={{ textAlign: "center", color: "#495057" }}>
              Người thông báo
            </th>
            <th style={{ textAlign: "center", color: "#495057" }}>Chức năng</th>
          </tr>
        </thead>
        {/* <tbody>
          {thongbaochungs.map((thongbaochung) => (
            <tr key={thongbaochung._id}>
              <td>{thongbaochung.tieude}</td>
              <td>{thongbaochung.ngaythongbao}</td>
              <td>{thongbaochung.nguoithongbao}</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  
                  style={{ backgroundColor: "#337AB7", borderColor: "#2d6da3" }}
                >
                  Xem
                </Button>
                <Button
                  style={{ backgroundColor: "#5bc0de", borderColor: "#269abc" }}
                >
                  Sửa
                </Button>
                <Button
                  style={{ backgroundColor: "#c9302c", borderColor: "#ac2925" }}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </Table>
      
    </div>
  );
}

export default Thongbaochungs;
