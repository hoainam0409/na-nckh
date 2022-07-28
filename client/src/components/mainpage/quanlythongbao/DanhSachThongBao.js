import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import SideBar from "../../sidebar/SideBar";
import ThemThongBao from "./ThemThongBao";
import SuaThongBao from "./SuaThongBao";
import Spinner from "react-bootstrap/Spinner";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToolBar from "../../../until/ToolBar";

const Thongbaochungs = () => {
  const {
    thongbaochungState: {
      thongbaochung,
      thongbaochungs,
      thongbaochungsLoading,
    },
    getThongbaochungs,
    setShowThemThongBao,
    showToast: { show, message, type },
    setShowToast,
    deleteThongBaoChung,
    findThongBaoChung,
    setShowSuaThongBaoChung,
  } = useContext(ThongbaochungContext);

  // Start: Get all
  useEffect(() => getThongbaochungs(), []);

  const chooseThongBaoChung = (thongbaochungId) => {
    findThongBaoChung(thongbaochungId);
    setShowSuaThongBaoChung(true);
  };

  let body = null;

  if (thongbaochungsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <>
        <ThemThongBao />
        {thongbaochung !== null && <SuaThongBao />}
        <div className="style-mainpage">
          <Row>
            <Col sm={4}><h1>Danh sách thông báo</h1></Col>
            <Col sm={8}>
              <div className="filter">
                <Row className="controls">
                  <Col>
                    <Form.Group>
                      <Form.Control type="date">
                      </Form.Control>
                    </Form.Group>

                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control type="date">
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="grid">
            <Row className="custom-toolbar">
              <Col>
                <Button
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "#337AB7",
                    borderColor: "#2d6da3",
                  }}
                  onClick={setShowThemThongBao.bind(this, true)}
                >
                  Thêm mới
                </Button></Col>
              <Col><ToolBar/></Col>
            </Row>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th>Ngày thông báo</th>
                  <th>Người thông báo</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {thongbaochungs.map((thongbaochung) => (
                  <tr key={thongbaochung._id}>
                    <td>1</td>
                    <td>{thongbaochung.tieude}</td>
                    <td>
                      {new Date(thongbaochung.ngaythongbao).toLocaleDateString(["ban", "id",])}
                    </td>
                    <td>{thongbaochung.nguoithongbao}</td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        variant="primary"
                        onClick={chooseThongBaoChung.bind(
                          this,
                          thongbaochung._id
                        )}
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
                        onClick={chooseThongBaoChung.bind(
                          this,
                          thongbaochung._id
                        )}
                        data-tip
                        data-for="Sửa"
                        style={{ color: 'white' }}
                      >
                        <ReactTooltip id="Sửa" place="top" effect="solid">
                          Sửa
                        </ReactTooltip>
                        <BsPencilSquare />
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteThongBaoChung(thongbaochung._id)}
                        data-tip
                        data-for="Xóa"
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
      </>
    );
  }
  return (
    <div>
      <SideBar />
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
      {body}
    </div>
  );
};

export default Thongbaochungs;
