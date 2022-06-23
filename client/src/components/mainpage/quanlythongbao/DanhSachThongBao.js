import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import { AuthContext } from "../../../contexts/AuthContext";
import SideBar from "../../sidebar/SideBar";
import ThemThongBao from "./ThemThongBao";
import SuaThongBao from "./SuaThongBao";
import Spinner from "react-bootstrap/Spinner";

const Thongbaochungs = () => {
  // Contexts
  // const {
  // 	authState: {
  // 		user: {username}
  // 	}
  // } = useContext(AuthContext)

  const {
    thongbaochungState: {
      thongbaochung,
      thongbaochungs,
      thongbaochungsLoading,
    },
    getThongbaochungs,
    setShowThemThongBao,
    showToast: { show, message, type },
    setShowToast,
    deleteThongBaoChung,
    findThongBaoChung,
    setShowSuaThongBaoChung,
  } = useContext(ThongbaochungContext);

  // Start: Get all
  useEffect(() => getThongbaochungs(), []);

  const chooseThongBaoChung = (thongbaochungId) => {
    findThongBaoChung(thongbaochungId);
    setShowSuaThongBaoChung(true);
  };

  let body = null;

  if (thongbaochungsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <>
        <div style={{ margin: "10px 20px 20px 330px" }}>
          <h1
            style={{
              fontSize: "24px",
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
            onClick={setShowThemThongBao.bind(this, true)}
          >
            Thêm mới
          </Button>
          <ThemThongBao />
          {thongbaochung !== null && <SuaThongBao />}

          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", color: "#495057" }}>
                  Tiêu đề
                </th>
                <th style={{ textAlign: "center", color: "#495057" }}>
                  Ngày thông báo
                </th>
                <th style={{ textAlign: "center", color: "#495057" }}>
                  Người thông báo
                </th>
                <th style={{ textAlign: "center", color: "#495057" }}>
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {thongbaochungs.map((thongbaochung) => (
                <tr key={thongbaochung._id}>
                  <td>{thongbaochung.tieude}</td>
                  <td>
                    {new Date(thongbaochung.ngaythongbao).toLocaleDateString()}
                  </td>
                  <td>{thongbaochung.nguoithongbao}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        backgroundColor: "#337AB7",
                        borderColor: "#2d6da3",
                      }}
                      onClick={chooseThongBaoChung.bind(
                        this,
                        thongbaochung._id
                      )}
                    >
                      Xem
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#5bc0de",
                        borderColor: "#269abc",
                      }}
                      onClick={chooseThongBaoChung.bind(
                        this,
                        thongbaochung._id
                      )}
                    >
                      Sửa
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#c9302c",
                        borderColor: "#ac2925",
                      }}
                      onClick={() => deleteThongBaoChung(thongbaochung._id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
  return (
    <div>
      <SideBar />
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
      {body}
    </div>
  );
};

export default Thongbaochungs;
