import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import SideBar from "../../sidebar/SideBar";
import SuaDeTaiCB from "../dangky-cb/SuaDeTaiCB";
import NumberFormat from "react-number-format";
import ReactTooltip from "react-tooltip";
import {
  BsFillEyeFill,
  BsPencilSquare,
  BsFileEarmarkWord,
  BsCheckLg,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CapNhatBienBan from "./CapNhatBienBan";
import ToolBar from "../../../until/ToolBar";

const DeTaiDuyetThanhLy = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    showToast: { show, message, type },
    setShowToast,
    findDeTaiCB,
    setShowSuaDeTaiCB,
    setShowCapNhatBienBan,
  } = useContext(DeTaiCBContext);

  // Start: Get all
  useEffect(() => getDeTaiCBs(), []);

  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowSuaDeTaiCB(true);
  };
  const SelectDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowCapNhatBienBan(true);
  };
  return (
    <div>
      <SideBar />
      {detaicb !== null && <CapNhatBienBan />}
      {detaicb !== null && <SuaDeTaiCB />}
      <div className="style-mainpage">
        <Row>
          <Col sm={4}>
            <h1>Danh sách đề tài thanh lý</h1>
          </Col>
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
        <div>
          <ToolBar/>
          <Table
          borderless
          bordered
          hover
          style={{ cursor: "pointer"}}
        >
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Đợt đăng ký</th>
              <th>Khoa/Phòng ban xét duyệt</th>
              <th>Chủ nhiệm đề tài</th>
              <th>Thành viên tham gia</th>
              <th>Kinh phí (đồng)</th>
              <th>Trạng thái</th>
              <th className="chucnang">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {detaicbs.map((detaicb) => (
              <tr key={detaicb._id}>
                <td>{detaicb.madetai} </td>
                <td>{detaicb.tendetai}</td>
                <td>{detaicb.dotdangky} </td>
                <td>{detaicb.khoaxetduyet}</td>
                <td>{detaicb.chunhiem}</td>
                <td>
                  {detaicb.thanhvienthamgia.map((q) => (
                    <div key={q._id}>-{q.hovaten}</div>
                  ))}
                </td>
                <td>
                  <NumberFormat
                    value={detaicb.kinhphi}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </td>
                <td>{detaicb.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Dropdown as={ButtonGroup}>
                    <Button
                      style={{ backgroundColor: "#337AB7" }}
                      onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                    >
                      <span>
                        <BsFillEyeFill />
                      </span>
                      Xem
                    </Button>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "#337AB7" }}
                      id="dropdown-split-basic"
                      data-tip
                      data-for="Chức năng khác"
                    >
                      <ReactTooltip
                        id="Chức năng khác"
                        place="top"
                        effect="solid"
                      >
                        Chức năng khác
                      </ReactTooltip>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={SelectDeTaiCB.bind(this, detaicb._id)}
                      >
                        <span>
                          <BsPencilSquare />
                        </span>
                        Cập nhật biên bản thanh lý
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsCheckLg />
                        </span>
                        Duyệt
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        In biên bản thanh lý
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
export default DeTaiDuyetThanhLy;
