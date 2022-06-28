import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { LinhVucContext } from "../../../contexts/LinhVucContext";
import SideBar from "../../sidebar/SideBar";
import ThemLinhVuc from "./ThemLinhVuc";
import SuaLinhVuc from "./SuaLinhVuc";

const LinhVucs = () => {

  const {
    linhvucState: { linhvuc, linhvucs, linhvucsLoading },
    getLinhVucs,
    setShowThemLinhVuc,
    showToast: { show, message, type },
    setShowToast,
    deleteLinhVuc,
    findLinhVuc,
    setShowSuaLinhVuc,
  } = useContext(LinhVucContext);

  // Start: Get all
  useEffect(() => getLinhVucs(), []);

  const chooseLinhVuc = (linhvucId) => {
    findLinhVuc(linhvucId);
    setShowSuaLinhVuc(true);
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
          Danh sách lĩnh vực nghiên cứu
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
          onClick={setShowThemLinhVuc.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemLinhVuc />
        {linhvuc !== null && <SuaLinhVuc/>}

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
            {linhvucs.map((linhvuc) => (
              <tr key={linhvuc._id}>
                <td>{linhvuc.ma}</td>
                <td>{linhvuc.ten} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseLinhVuc.bind(this, linhvuc._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                    }}
                    onClick={chooseLinhVuc.bind(this, linhvuc._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                    }}
                    onClick={() => deleteLinhVuc(linhvuc._id)}
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

export default LinhVucs;
