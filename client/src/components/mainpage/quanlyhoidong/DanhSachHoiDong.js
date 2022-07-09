import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import SideBar from "../../sidebar/SideBar";
import ThemHoiDong from "./ThemHoiDong";
import SuaHoiDong from "./SuaHoiDong";
import ReactTooltip from "react-tooltip"
import { BsFillEyeFill, BsPencilSquare, BsTrashFill} from "react-icons/bs";

const HoiDongs = () => {

  const {
    hoidongState: { hoidong, hoidongs, hoidongsLoading },
    getHoiDongs,
    setShowThemHoiDong,
    showToast: { show, message, type },
    setShowToast,
    deleteHoiDong,
    findHoiDong,
    setShowSuaHoiDong,
  } = useContext(HoiDongContext);

  // Start: Get all
  useEffect(() => getHoiDongs(), []);

  const chooseHoiDong = (hoidongId) => {
    findHoiDong(hoidongId);
    setShowSuaHoiDong(true);
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
          Danh sách hội đồng khoa học
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
          onClick={setShowThemHoiDong.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemHoiDong/>
        {hoidong !== null && <SuaHoiDong/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Tên hội đồng</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Loại hội đồng</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Ngày đề nghị</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Năm</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {hoidongs.map((hoidong) => (
              <tr key={hoidong._id}>
                <td onClick={chooseHoiDong.bind(this, hoidong._id)}>{hoidong.tenhoidong} </td>
                <td>{hoidong.loaihoidong}</td>
                <td>{new Date(hoidong.ngaydenghi).toLocaleDateString()} </td>
                <td>{hoidong.nam}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    onClick={chooseHoiDong.bind(this, hoidong._id)}
                    data-tip data-for="Xem"
                    variant="primary"
                  >
                   <ReactTooltip id="Xem" place="top" effect="solid">Xem</ReactTooltip>
                    <BsFillEyeFill/>
                  </Button>
                  <Button
                    onClick={chooseHoiDong.bind(this, hoidong._id)}
                    data-tip data-for="Sửa"
                    variant="info"
                  >
                  <ReactTooltip id="Sửa" place="top" effect="solid">Sửa</ReactTooltip>
                    <BsPencilSquare style={{color: 'white'}}/>
                  </Button>
                  <Button
                    onClick={() => deleteHoiDong(hoidong._id)}
                    data-tip data-for="Xóa"
                    variant="danger"
                  >
                   <ReactTooltip id="Xóa" place="top" effect="solid">Xóa</ReactTooltip> 
                  <BsTrashFill/>
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

export default HoiDongs;
