import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
// import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { DeTaiSVContext } from "../../../contexts/DeTaiSVContext";
import SideBar from "../../sidebar/SideBar";
import SuaDeTaiSV from "./SuaDeTaiSV";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DeTaiSVs = () => {
  const {
    detaisvState: { detaisv, detaisvs, detaisvsLoading },
    getDeTaiSVs,
    showToast: { show, message, type },
    setShowToast,
    deleteDeTaiSV,
    findDeTaiSV,
    setShowSuaDeTaiSV,
  } = useContext(DeTaiSVContext);

  // Start: Get all
  useEffect(() => getDeTaiSVs(), []);

  const chooseDeTaiSV = (detaisvId) => {
    findDeTaiSV(detaisvId);
    setShowSuaDeTaiSV(true);
  };
  return (
    <div>
      <SideBar />
      {detaisv !== null && <SuaDeTaiSV />}
      <div className="style-mainpage">
        <div>
          <h1>Danh sách đăng ký đề tài chờ xác nhận</h1>
          <div className="filter">
            <Row className="controls">
              <Col>
                <Form.Select>
                  <option value="">Chọn Khoa/Phòng ban</option>
                  <option value="Khoa 1">Khoa 1</option>
                  <option value="Khoa 2">Khoa 2</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  <option value="">Chọn Bộ môn</option>
                  <option value="Bộ môn 1">Bộ môn 1</option>
                  <option value="Bộ môn 2">Bộ môn 2</option>
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
        <Table borderless bordered hover style={{ cursor: "pointer", marginTop: "100px"}}>
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Đợt đăng ký</th>
              <th>Khoa xét duyệt</th>
              <th>GVHD</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {detaisvs.map((detaisv) => (
              <tr key={detaisv._id}>
                <td>{detaisv.madetai} </td>
                <td>{detaisv.tendetai}</td>
                <td>{detaisv.dotdangky} </td>
                <td>{detaisv.khoaxetduyet}</td>
                <td>{detaisv.GVHD}</td>
                <td>{detaisv.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                    }}
                    onClick={chooseDeTaiSV.bind(this, detaisv._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                    }}
                    onClick={() => deleteDeTaiSV(detaisv._id)}
                  >
                    Xóa
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

export default DeTaiSVs;
