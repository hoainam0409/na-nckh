import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { LoaiĐTContext } from "../../../contexts/LoaiĐTContext";
import SideBar from "../../sidebar/SideBar";
import ThemLoaiĐT from "./ThemLoaiĐT";
import SuaLoaiĐT from "./SuaLoaiĐT";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const LoaiĐTs = () => {
  const {
    loaiĐTState: { loaiĐT, loaiĐTs, loaiĐTsLoading },
    getLoaiĐTs,
    setShowThemLoaiĐT,
    showToast: { show, message, type },
    setShowToast,
    deleteLoaiĐT,
    findLoaiĐT,
    setShowSuaLoaiĐT,
  } = useContext(LoaiĐTContext);

  // Start: Get all
  useEffect(() => getLoaiĐTs(), []);

  const chooseLoaiĐT = (loaiĐTId) => {
    findLoaiĐT(loaiĐTId);
    setShowSuaLoaiĐT(true);
  };
  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <h1>Danh sách loại đề tài</h1>
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
            borderColor: "#2d6da3",
          }}
          onClick={setShowThemLoaiĐT.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemLoaiĐT />
        {loaiĐT !== null && <SuaLoaiĐT />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Đối tượng tham gia</th>
              <th>Quy trình xét duyệt</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {loaiĐTs.map((loaiĐT) => (
              <tr key={loaiĐT._id}>
                <td>1</td>
                <td>{loaiĐT.ma}</td>
                <td>{loaiĐT.ten} </td>
                <td>{loaiĐT.capdetai} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    onClick={chooseLoaiĐT.bind(this, loaiĐT._id)}
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
                    onClick={chooseLoaiĐT.bind(this, loaiĐT._id)}
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
                    onClick={() => deleteLoaiĐT(loaiĐT._id)}
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

export default LoaiĐTs;
