import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
// import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { DeTaiSVContext } from "../../../contexts/DeTaiSVContext";
import SideBar from "../../sidebar/SideBar";
import ThemDeTaiSV from "./ThemDeTaiSV";
import SuaDeTaiSV from "./SuaDeTaiSV";

const DeTaiSVs = () => {
  const {
    detaisvState: { detaisv, detaisvs, detaisvsLoading },
    getDeTaiSVs,
    // setShowThemDeTaiSV,
    showToast: { show, message, type },
    setShowToast,
    deleteDeTaiSV,
    findDeTaiSV,
    setShowSuaDeTaiSV,
    ShowFullScreen,
  } = useContext(DeTaiSVContext);

  // Start: Get all
  useEffect(() => getDeTaiSVs(), []);

  const chooseDeTaiSV = (detaisvId) => {
    findDeTaiSV(detaisvId);
    setShowSuaDeTaiSV(true);
  };
  return (
    <div>
      <SideBar />
      <ThemDeTaiSV />
      {detaisv !== null && <SuaDeTaiSV />}
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <h1
          style={{
            fontSize: "24px",
          }}
        >
          Danh sách đăng ký đề tài sinh viên
        </h1>
        <Toast
          show={show}
          style={{ position: "fixed", right: "10px" }}
          className={`bg-${type} text-white`}
          onClose={setShowToast.bind(this, {
            show: false,
            message: "",
            type: null,
          })}
          delay={3000}
          autohide
        >
          <Toast.Body>
            <strong>{message}</strong>
          </Toast.Body>
        </Toast>
        <Button
          style={{
            marginTop: "70px",
            marginBottom: "20px",
            backgroundColor: "#337AB7",
            borderColor: "#2d6da3",
          }}
          onClick={ShowFullScreen.bind(this, true)}
        >
          Thêm mới
        </Button>
<Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Mã đề tài
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Tên đề tài
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Đợt đăng ký
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Khoa xét duyệt
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>GVHD</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Trạng thái
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {detaisvs.map((detaisv) => (
              <tr key={detaisv._id}>
                <td>{detaisv.madetai} </td>
                <td>{detaisv.tendetai}</td>
                <td>{detaisv.dotdangky} </td>
                <td>{detaisv.khoaxetduyet}</td>
                <td>{detaisv.GVHD}</td>
                <td>{detaisv.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                    }}
                    onClick={() => deleteDeTaiSV(detaisv._id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DeTaiSVs;
