import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import SideBar from "../../sidebar/SideBar";
import ThemDeTaiCB from "./ThemDeTaiCB";
import SuaDeTaiCB from "./SuaDeTaiCB";
import ReactTooltip from "react-tooltip";
import {
  BsFillEyeFill,
  BsCursorFill,
  BsFillFileEarmarkWordFill,
  BsPencilSquare,
  BsTrashFill,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DeTaiCBs = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    setShowThemDeTaiCB,
    showToast: { show, message, type },
    setShowToast,
    deleteDeTaiCB,
    findDeTaiCB,
    setShowSuaDeTaiCB,
    trangThai,
    updateTrangThai,
  } = useContext(DeTaiCBContext);

  // Start: Get all
  useEffect(() => getDeTaiCBs(), []);

  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowSuaDeTaiCB(true);
  };
  const selectDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    updateTrangThai("Chờ duyệt cấp khoa");
  };

  return (
    <div>
      <SideBar />
      <ThemDeTaiCB />
      {detaicb !== null && <SuaDeTaiCB />}
      <div className="style-mainpage">
        <div>
          <h1 style={{ fontSize: "24px" }}>Danh sách đăng ký đề tài</h1>
          <div className="filter">
            <Row className="controls">
              <Col>
                <Form.Select>
                  <option value="">Chọn cấp đề tài</option>
                  <option value="Cấp trường">Cấp trường</option>
                  <option value="Cấp Bộ">Cấp Bộ</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  <option value="">Chọn Khoa/Phòng ban</option>
                  <option value="Khoa 1">Khoa 1</option>
                  <option value="Khoa 2">Khoa 2</option>
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
          onClick={setShowThemDeTaiCB.bind(this, true)}
        >
          Thêm mới
        </Button>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Đợt đăng ký</th>
              <th>Khoa xét duyệt</th>
              <th>Thành viên tham gia</th>
              <th>Kinh phí(đồng)</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {detaicbs.map((detaicb) => (
              <tr key={detaicb._id}>
                <td>{detaicb.madetai} </td>
                <td>{detaicb.tendetai}</td>
                <td>{detaicb.dotdangky} </td>
                <td>{detaicb.khoaxetduyet}</td>
                <td>
                  {detaicb.thanhvienthamgia.map((q) => (
                    <div key={q._id}>- {q.hovaten}</div>
                  ))}
                </td>
                <td>{detaicb.kinhphi}</td>
                <td>{detaicb.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    data-tip
                    data-for="Xem"
                    onClick={chooseDeTaiCB.bind(this, detaicb._id)}
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
                    onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                  >
                    <ReactTooltip id="Sửa" place="top" effect="solid">
                      Sửa
                    </ReactTooltip>
                    <BsPencilSquare style={{ color: "white" }} />
                  </Button>
                  <Button
                    variant="primary"
                    data-tip
                    data-for="Gửi duyệt"
                    onClick={() => selectDeTaiCB(this, detaicb._id)}
                  >
                    <ReactTooltip id="Gửi duyệt" place="top" effect="solid">
                      Gửi duyệt
                    </ReactTooltip>
                    <BsCursorFill />
                  </Button>
                  <Button
                    variant="danger"
                    data-tip
                    data-for="Xóa"
                    onClick={() => deleteDeTaiCB(detaicb._id)}
                  >
                    <ReactTooltip id="Xóa" place="top" effect="solid">
                      Xóa
                    </ReactTooltip>
                    <BsTrashFill />
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                    }}
                    data-tip
                    data-for="In thuyết minh"
                  >
                    <ReactTooltip
                      id="In thuyết minh"
                      place="top"
                      effect="solid"
                    >
                      In thuyết minh
                    </ReactTooltip>
                    <BsFillFileEarmarkWordFill />
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

export default DeTaiCBs;
