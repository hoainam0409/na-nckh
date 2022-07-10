import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import SideBar from "../../sidebar/SideBar";
import ThemHoiDong from "./ThemHoiDong";
import SuaHoiDong from "./SuaHoiDong";
import ReactTooltip from "react-tooltip";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

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
      <div className="style-mainpage">
        <div>
        <h1>Danh sách hội đồng khoa học</h1>
        <div className="filter">
            <Row className="controls">
              <Col>
                <Form.Select>
                  <option value="">Chọn loại hội đồng</option>
                  <option value="Hội đồng đánh giá">Hội đồng đánh giá</option>
                  <option value="Hội đồng nghiệm thu">Hội đồng nghiệm thu</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  <option value="">Chọn năm</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
        </div>
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
        <ThemHoiDong />
        {hoidong !== null && <SuaHoiDong />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Tên hội đồng</th>
              <th>Loại hội đồng</th>
              <th>Ngày đề nghị</th>
              <th>Năm</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {hoidongs.map((hoidong) => (
              <tr key={hoidong._id}>
                <td>1</td>
                <td onClick={chooseHoiDong.bind(this, hoidong._id)}>
                  {hoidong.tenhoidong}{" "}
                </td>
                <td>{hoidong.loaihoidong}</td>
                <td>{new Date(hoidong.ngaydenghi).toLocaleDateString()} </td>
                <td>{hoidong.nam}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    onClick={chooseHoiDong.bind(this, hoidong._id)}
                    data-tip
                    data-for="Xem"
                    variant="primary"
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">
                      Xem
                    </ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    onClick={chooseHoiDong.bind(this, hoidong._id)}
                    data-tip
                    data-for="Sửa"
                    variant="info"
                  >
                    <ReactTooltip id="Sửa" place="top" effect="solid">
                      Sửa
                    </ReactTooltip>
                    <BsPencilSquare style={{ color: "white" }} />
                  </Button>
                  <Button
                    onClick={() => deleteHoiDong(hoidong._id)}
                    data-tip
                    data-for="Xóa"
                    variant="danger"
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

export default HoiDongs;
