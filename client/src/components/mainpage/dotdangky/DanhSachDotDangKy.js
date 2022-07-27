import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import SideBar from "../../sidebar/SideBar";
import ThemDotDangKy from "./ThemDotDangKy";
import SuaDotDangKy from "./SuaDotDangKy";
import ReactTooltip from "react-tooltip";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";
import ToolBar from "../../../until/ToolBar";

const DotDangKys = () => {
  const {
    dotdangkyState: { dotdangky, dotdangkys, dotdangkysLoading },
    getDotDangKys,
    setShowThemDotDangKy,
    showToast: { show, message, type },
    setShowToast,
    deleteDotDangKy,
    findDotDangKy,
    setShowSuaDotDangKy,
  } = useContext(DotDangKyContext);

  // Start: Get all
  useEffect(() => getDotDangKys(), []);

  const chooseDotDangKy = (dotdangkyId) => {
    findDotDangKy(dotdangkyId);
    setShowSuaDotDangKy(true);
  };
  return (
    <div>
      <SideBar />
      <ThemDotDangKy />
      {dotdangky !== null && <SuaDotDangKy />}
      <div className="style-mainpage">
        <Row>
          <Col sm={4}><h1>Danh sách đợt đăng ký đề tài</h1></Col>
          <Col sm={8}>
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
                    <option value="">Chọn năm</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
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
        <div className="grid">
          <Row className="custom-toolbar">
            <Col>
              <Button
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#337AB7",
                  borderColor: "#2d6da3",
                }}
                onClick={setShowThemDotDangKy.bind(this, true)}
              >
                Thêm mới
              </Button></Col>
            <Col>
              <ToolBar /></Col>
          </Row>
          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr className="table-header">
                <th>STT</th>
                <th>Mã đợt</th>
                <th>Tên đợt</th>
                <th>Năm</th>
                <th>Cấp đề tài</th>
                <th>Ngày mở đăng ký</th>
                <th>Ngày khóa đăng ký</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {dotdangkys.map((dotdangky) => (
                <tr key={dotdangky._id}>
                  <td>1</td>
                  <td onClick={chooseDotDangKy.bind(this, dotdangky._id)}>
                    {dotdangky.madot}
                  </td>
                  <td>{dotdangky.tendot}</td>
                  <td>{dotdangky.nam} </td>
                  <td>{dotdangky.capdetai}</td>
                  <td>
                    {new Date(dotdangky.ngaymodangky).toLocaleDateString(["ban", "id",])}
                  </td>
                  <td>
                    {new Date(dotdangky.ngaykhoadangky).toLocaleDateString(["ban", "id",])}
                  </td>
                  <td>{dotdangky.trangthai}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      data-tip
                      data-for="Xem"
                      variant="primary"
                      onClick={chooseDotDangKy.bind(this, dotdangky._id)}
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
                      onClick={chooseDotDangKy.bind(this, dotdangky._id)}
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
                      onClick={() => deleteDotDangKy(dotdangky._id)}
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
    </div>
  );
};

export default DotDangKys;
