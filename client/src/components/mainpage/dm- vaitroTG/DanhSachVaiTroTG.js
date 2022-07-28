import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { VaiTroTGContext } from "../../../contexts/VaiTroTGContext";
import SideBar from "../../sidebar/SideBar";
import ThemVaiTroTG from "./ThemVaiTroTG";
import SuaVaiTroTG from "./SuaVaiTroTG";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const VaiTroTGs = () => {
  const {
    vaitroTGState: { vaitroTG, vaitroTGs, vaitroTGsLoading },
    getVaiTroTGs,
    setShowThemVaiTroTG,
    showToast: { show, message, type },
    setShowToast,
    deleteVaiTroTG,
    findVaiTroTG,
    setShowSuaVaiTroTG,
  } = useContext(VaiTroTGContext);

  // Start: Get all
  useEffect(() => getVaiTroTGs(), []);

  const chooseVaiTroTG = (vaitroTGId) => {
    findVaiTroTG(vaitroTGId);
    setShowSuaVaiTroTG(true);
  };

  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <h1>Danh sách vai trò tham gia</h1>
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
          onClick={setShowThemVaiTroTG.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemVaiTroTG />
        {vaitroTG !== null && <SuaVaiTroTG />}

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
            {vaitroTGs.map((vaitroTG) => (
              <tr key={vaitroTG._id}>
                <td>1</td>
                <td>{vaitroTG.ma}</td>
                <td>{vaitroTG.ten} </td>
                <td>{vaitroTG.capdetai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    data-tip
                    data-for="Xem"
                    variant="primary"
                    onClick={chooseVaiTroTG.bind(this, vaitroTG._id)}
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
                    onClick={chooseVaiTroTG.bind(this, vaitroTG._id)}
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
                    onClick={() => deleteVaiTroTG(vaitroTG._id)}
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

export default VaiTroTGs;
