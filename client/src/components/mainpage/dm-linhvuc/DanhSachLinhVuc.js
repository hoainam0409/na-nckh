import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { LinhVucContext } from "../../../contexts/LinhVucContext";
import SideBar from "../../sidebar/SideBar";
import ThemLinhVuc from "./ThemLinhVuc";
import SuaLinhVuc from "./SuaLinhVuc";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

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
      <div className="style-mainpage">
        <h1>Danh sách lĩnh vực nghiên cứu</h1>
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
            marginBottom: "20px",
            backgroundColor: "#337AB7",
          }}
          onClick={setShowThemLinhVuc.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemLinhVuc />
        {linhvuc !== null && <SuaLinhVuc />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {linhvucs.map((linhvuc) => (
              <tr key={linhvuc._id}>
                <td>1</td>
                <td>{linhvuc.ma}</td>
                <td>{linhvuc.ten} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    data-tip
                    data-for="Xem"
                    variant="primary"
                    onClick={chooseLinhVuc.bind(this, linhvuc._id)}
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">
                      Xem
                    </ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    variant="info"
                    data-tip
                    data-for="Sửa"
                    onClick={chooseLinhVuc.bind(this, linhvuc._id)}
                  >
                    <ReactTooltip id="Sửa" place="top" effect="solid">
                      Sửa
                    </ReactTooltip>
                    <BsPencilSquare style={{ color: "white" }} />
                  </Button>
                  <Button
                    variant="danger"
                    data-tip
                    data-for="Xóa"
                    onClick={() => deleteLinhVuc(linhvuc._id)}
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
    </div>
  );
};

export default LinhVucs;
