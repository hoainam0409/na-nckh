import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import SideBar from "../../sidebar/SideBar";
import ThemThongBao from "./ThemThongBao";
import SuaThongBao from "./SuaThongBao";
import Spinner from "react-bootstrap/Spinner";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Thongbaochungs = () => {
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
        <div className="style-mainpage">
          <h1>Danh sách thông báo</h1>
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
              <tr className="table-header">
                <th>Tiêu đề</th>
                <th>Ngày thông báo</th>
                <th>Người thông báo</th>
                <th>Chức năng</th>
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
                      variant="primary"
                      onClick={chooseThongBaoChung.bind(
                        this,
                        thongbaochung._id
                      )}
                      data-tip
                      data-for="Xem"
                    >
                      <ReactTooltip id="Xem" place="top" effect="solid">
                        Xem
                      </ReactTooltip>
                      <BsFillEyeFill />
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#5bc0de",
                      }}
                      onClick={chooseThongBaoChung.bind(
                        this,
                        thongbaochung._id
                      )}
                      data-tip
                      data-for="Sửa"
                    >
                      <ReactTooltip id="Sửa" place="top" effect="solid">
                        Sửa
                      </ReactTooltip>
                      <BsPencilSquare />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteThongBaoChung(thongbaochung._id)}
                      data-tip
                      data-for="Xóa"
                    >
                      <ReactTooltip id="Xóa" place="top" effect="solid">
                        Xóa
                      </ReactTooltip>
                      <BsTrashFill />
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
