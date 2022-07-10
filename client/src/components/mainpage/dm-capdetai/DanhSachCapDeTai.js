import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";
import SideBar from "../../sidebar/SideBar";
import ThemCapDeTai from "./ThemCapDeTai";
import SuaCapDeTai from "./SuaCapDeTai";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const CapDeTais = () => {
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
      <div className="style-mainpage">
        <h1>Danh sách cấp đề tài</h1>
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
        {capdetai !== null && <SuaCapDeTai />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Mã</th>
              <th>Tên</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {capdetais.map((capdetai) => (
              <tr key={capdetai._id}>
                <td>{capdetai.ma}</td>
                <td>{capdetai.ten} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    onClick={chooseCapDeTai.bind(this, capdetai._id)}
                    data-tip
                    data-for="Xem"
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">
                      Xem
                    </ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    variant="info"
                    onClick={chooseCapDeTai.bind(this, capdetai._id)}
                  >
                    <ReactTooltip id="Sửa" place="top" effect="solid">
                      Sửa
                    </ReactTooltip>
                    <BsPencilSquare style={{ color: "white" }} />
                  </Button>
                  <Button
                    data-tip
                    variant="danger"
                    data-for="Xóa"
                    onClick={() => deleteCapDeTai(capdetai._id)}
                  >
                    <BsTrashFill />
                    <ReactTooltip id="Xóa" place="top" effect="solid">
                      Xóa
                    </ReactTooltip>
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
