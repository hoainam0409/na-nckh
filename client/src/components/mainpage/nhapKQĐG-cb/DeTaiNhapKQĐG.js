import React, { useContext, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import SideBar from "../../sidebar/SideBar";
import NhapKQĐGDeTai from "./NhapKQĐGDeTaiCB";
import SuaDeTaiCB from '../dangky-cb/SuaDeTaiCB'
import ReactTooltip from "react-tooltip"
import { BsFillEyeFill, BsFillFileEarmarkWordFill, BsPencilSquare } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DeTaiNhapKQDGs = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    showToast: { show, message, type },
    setShowToast,
    findDeTaiCB,
    setShowSuaDeTaiCB,
    setShowNhapKQĐG,
    
  } = useContext(DeTaiCBContext);

  // Start: Get all
  useEffect(() => getDeTaiCBs(), [getDeTaiCBs]);

  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowSuaDeTaiCB(true);
  };
  const SelectDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowNhapKQĐG(true);
  };
  return (
    <div>
      <SideBar />
      {detaicb !== null && <SuaDeTaiCB />}
      {detaicb !== null && <NhapKQĐGDeTai />}
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <div>
          <h1 style={{ fontSize: "24px" }}> Danh sách đánh giá đề tài</h1>
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
        <Table borderless bordered hover style={{ cursor: "pointer", marginTop: '100px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Mã đề tài
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Tên đề tài
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Đợt đăng ký
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Khoa xét duyệt
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Thành viên tham gia
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Trạng thái
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {detaicbs.map((detaicb) => (
              <tr key={detaicb._id}>
                <td>{detaicb.madetai} </td>
                <td>{detaicb.tendetai}</td>
                <td>{detaicb.dotdangky} </td>
                <td>{detaicb.khoaxetduyet}</td>
                <td>{detaicb.thanhvienthamgia.map(q => (
                  <div key= {q._id}>
                    {q.hovaten}
                  </div>
                ))}</td>
                <td>{detaicb.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{ backgroundColor: "#337AB7", borderColor: "#2d6da3", margin: '3px', }}
                    onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                    data-tip data-for="Xem"
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">Xem</ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#5bc0de", borderColor: "#269abc", margin: '3px', }}
                    onClick={SelectDeTaiCB.bind(this, detaicb._id)}
                    data-tip data-for="Nhập kết quả đánh giá"
                  >
                    <ReactTooltip id="Nhập kết quả đánh giá" place="top" effect="solid">Nhập kết quả đánh giá</ReactTooltip>
                    <BsPencilSquare />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#337AB7", borderColor: "#2d6da3", margin: '3px', }}
                    data-tip data-for="In thuyết minh"
                  >
                    <ReactTooltip id="In thuyết minh" place="top" effect="solid">In thuyết minh</ReactTooltip>
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
export default DeTaiNhapKQDGs;
