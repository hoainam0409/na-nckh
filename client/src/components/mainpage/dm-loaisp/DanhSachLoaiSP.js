import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { LoaiSPContext } from "../../../contexts/LoaiSPContext";
import SideBar from "../../sidebar/SideBar";
import ThemLoaiSP from "./ThemLoaiSP";
import SuaLoaiSP from "./SuaLoaiSP";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const LoaiSPs = () => {
  const {
    loaisanphamState: { loaisanpham, loaisanphams, loaisanphamsLoading },
    getLoaiSPs,
    setShowThemLoaiSP,
    showToast: { show, message, type },
    setShowToast,
    deleteLoaiSP,
    findLoaiSP,
    setShowSuaLoaiSP,
  } = useContext(LoaiSPContext);

  // Start: Get all
  useEffect(() => getLoaiSPs(), []);

  const chooseLoaiSP = (loaisanphamId) => {
    findLoaiSP(loaisanphamId);
    setShowSuaLoaiSP(true);
  };
  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <h1>Danh sách loại sản phẩm NCKH</h1>
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
          onClick={setShowThemLoaiSP.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemLoaiSP />
        {loaisanpham !== null && <SuaLoaiSP />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Mã</th>
              <th>Tên</th>
              <th>Loại sản phẩm ứng dụng</th>
              <th>Cấp đề tài</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {loaisanphams.map((loaisanpham) => (
              <tr key={loaisanpham._id}>
                <td>{loaisanpham.ma}</td>
                <td>{loaisanpham.ten}</td>
                <td>{loaisanpham.sanphamUD}</td>
                <td>{loaisanpham.capdetai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    onClick={chooseLoaiSP.bind(this, loaisanpham._id)}
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
                    onClick={chooseLoaiSP.bind(this, loaisanpham._id)}
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
                    onClick={() => deleteLoaiSP(loaisanpham._id)}
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

export default LoaiSPs;
