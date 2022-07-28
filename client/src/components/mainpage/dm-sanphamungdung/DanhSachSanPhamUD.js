import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { SanPhamUDContext } from "../../../contexts/SanPhamUDContext";
import SideBar from "../../sidebar/SideBar";
import ThemSanPhamUD from "./ThemSanPhamUD";
import SuaSanPhamUD from "./SuaSanPhamUD";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const SanPhamUDs = () => {
  const {
    sanphamUDState: { sanphamUD, sanphamUDs, sanphamUDsLoading },
    getSanPhamUDs,
    setShowThemSanPhamUD,
    showToast: { show, message, type },
    setShowToast,
    deleteSanPhamUD,
    findSanPhamUD,
    setShowSuaSanPhamUD,
  } = useContext(SanPhamUDContext);

  // Start: Get all
  useEffect(() => getSanPhamUDs(), []);

  const chooseSanPhamUD = (sanphamUDId) => {
    findSanPhamUD(sanphamUDId);
    setShowSuaSanPhamUD(true);
  };
  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <h1>Danh sách loại sản phẩm ứng dụng</h1>
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
          onClick={setShowThemSanPhamUD.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemSanPhamUD/>
        {sanphamUD !== null && <SuaSanPhamUD/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Cấp đề tài</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {sanphamUDs.map((sanphamUD) => (
              <tr key={sanphamUD._id}>
                <td>1</td>
                <td>{sanphamUD.ma}</td>
                <td>{sanphamUD.ten} </td>
                <td>{sanphamUD.capdetai} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    onClick={chooseSanPhamUD.bind(this, sanphamUD._id)}
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
                    onClick={chooseSanPhamUD.bind(this, sanphamUD._id)}
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
                    onClick={() => deleteSanPhamUD(sanphamUD._id)}
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

export default SanPhamUDs;
