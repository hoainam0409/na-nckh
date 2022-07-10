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
    setShowThemDeTaiSV,
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
      <div className="style-mainpage">
        <h1>Danh sách đăng ký đề tài sinh viên</h1>
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
          }}
          onClick={setShowThemDeTaiSV.bind(this, true)}
        >
          Thêm mới
        </Button>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Đợt đăng ký</th>
              <th>Khoa xét duyệt</th>
              <th>GVHD</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
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
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
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
