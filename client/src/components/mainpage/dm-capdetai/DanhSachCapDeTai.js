import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";
import { AuthContext } from "../../../contexts/AuthContext";
import SideBar from "../../sidebar/SideBar";
import ThemCapDeTai from "./ThemCapDeTai";
import SuaCapDeTai from "./SuaCapDeTai";

const CapDeTais = () => {
  // Contexts
  // const {
  // 	authState: {
  // 		user: {username}
  // 	}
  // } = useContext(AuthContext)

  const {
    capdetaiState: { capdetai, capdetais, capdetaisLoading },
    getCapDeTais,
    setShowThemCapDeTai,
    showToast: { show, message, type },
    setShowToast,
    deleteCapDeTai,
    findCapDeTai,
    setShowSuaCapDeTai,
  } = useContext(CapDeTaiContext);

  // Start: Get all
  useEffect(() => getCapDeTais(), []);

  const chooseCapDeTai = (capdetaiId) => {
    findCapDeTai(capdetaiId);
    setShowSuaCapDeTai(true);
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
          Danh sách cấp đề tài
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
          onClick={setShowThemCapDeTai.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemCapDeTai />
        {capdetai !== null && <SuaCapDeTai/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Mã</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Tên</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {capdetais.map((capdetai) => (
              <tr key={capdetai._id}>
                <td>{capdetai.ma}</td>
                <td>{capdetai.ten} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseCapDeTai.bind(this, capdetai._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                    }}
                    onClick={chooseCapDeTai.bind(this, capdetai._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                    }}
                    onClick={() => deleteCapDeTai(capdetai._id)}
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

export default CapDeTais;
