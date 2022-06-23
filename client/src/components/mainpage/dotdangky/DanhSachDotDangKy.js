import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { AuthContext } from "../../../contexts/AuthContext";
import SideBar from "../../sidebar/SideBar";
import ThemDotDangKy from "./ThemDotDangKy";
import SuaDotDangKy from "./SuaDotDangKy";

const DotDangKys = () => {
  // Contexts
  // const {
  // 	authState: {
  // 		user: {username}
  // 	}
  // } = useContext(AuthContext)

  const {
    dotdangkyState: { dotdangky, dotdangkys, dotdangkysLoading },
    getDotDangKys,
    setShowThemDotDangKy,
    showToast: { show, message, type },
    setShowToast,
    deleteDotDangKy,
    findDotDangKy,
    setShowSuaDotDangKy,
  } = useContext(DotDangKyContext);

  // Start: Get all
  useEffect(() => getDotDangKys(), []);

  const chooseDotDangKy = (dotdangkyId) => {
    findDotDangKy(dotdangkyId);
    setShowSuaDotDangKy(true);
  };
  return (
    <div>
      <SideBar />
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <h1
          style={{
            fontSize: "24px",
          }}
        >
          Danh sách đợt đăng ký đề tài
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
          onClick={setShowThemDotDangKy.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemDotDangKy/>
        {dotdangky !== null && <SuaDotDangKy/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Mã đợt</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Tên đợt</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Năm</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Cấp đề tài</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Ngày mở đăng ký</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Ngày khóa đăng ký</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {dotdangkys.map((dotdangky) => (
              <tr key={dotdangky._id}>
                <td onClick={chooseDotDangKy.bind(this, dotdangky._id)}>{dotdangky.madot} </td>
                <td>{dotdangky.tendot}</td>
                <td>{dotdangky.nam} </td>
                <td>{dotdangky.capdetai}</td>
                <td>{new Date(dotdangky.ngaymodangky).toLocaleDateString()} </td>
                <td>{new Date(dotdangky.ngaykhoadangky).toLocaleDateString()} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseDotDangKy.bind(this, dotdangky._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                    }}
                    onClick={chooseDotDangKy.bind(this, dotdangky._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                    }}
                    onClick={() => deleteDotDangKy(dotdangky._id)}
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

export default DotDangKys;
