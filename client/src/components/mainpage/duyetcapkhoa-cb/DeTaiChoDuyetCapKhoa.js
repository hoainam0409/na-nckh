import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import SideBar from "../../sidebar/SideBar";
import SuaDeTaiCB from "../dangky-cb/SuaDeTaiCB";
import NhapKQHĐKhoa from "./NhapKQHĐ";
import XemChTiet from "./XemChiTiet";
import YeuCauSua from "../../../until/YeuCauSua";
import NumberFormat from "react-number-format";
import ReactTooltip from "react-tooltip";
import {
  BsFillEyeFill,
  BsPencilSquare,
  BsFileEarmarkWord,
  BsReplyFill,
  BsXLg,
  BsCheckLg,
  BsPeople,
  BsCursorFill,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToolBar from "../../../until/ToolBar";

const DeTaiDuyetCapKhoas = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    showToast: { show, message, type },
    setShowToast,
    findDeTaiCB,
    setShowXemDeTaiCB,
    setShowNhapKQHĐ,
    setShowSuaDeTaiCB,
    setShowYeuCauSua
  } = useContext(DeTaiCBContext);

  // Start: Get all
  useEffect(() => getDeTaiCBs(), []);

  const SelectDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowXemDeTaiCB(true);
  };
  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowSuaDeTaiCB(true);
  };
  const chooseCapNhatKQHĐ = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowNhapKQHĐ(true);
  };
  const GuiYeuCauSua = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowYeuCauSua(true);
  };
  return (
    <div>
      <SideBar />
      {detaicb !== null && <SuaDeTaiCB />}
      {detaicb !== null && <NhapKQHĐKhoa />}
      {detaicb !== null && <XemChTiet />}
      {detaicb !== null && <YeuCauSua />}
      <div className="style-mainpage">
        <Row>
          <Col sm={4}>
            <h1>Danh sách đề tài chờ duyệt cấp khoa</h1>
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
        <div className="grid">
          <Row className="custom-toolbar">
            <Col></Col>
            <Col> <ToolBar /></Col>
          </Row>
          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr className="table-header">
                <th>STT</th>
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
                  <td>1</td>
                  <td>{detaicb.madetai} </td>
                  <td>{detaicb.tendetai}</td>
                  <td>{detaicb.dotdangky} </td>
                  <td>{detaicb.khoaxetduyet}</td>
                  <td>{detaicb.chunhiem}</td>
                  <td>
                    {detaicb.thanhvienthamgia.map((q) => (
                      <div key={q._id}>- {q.hovaten}</div>
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
                        onClick={SelectDeTaiCB.bind(this, detaicb._id)}
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
                          onClick={chooseCapNhatKQHĐ.bind(this, detaicb._id)}
                        >
                          <span>
                            <BsPeople />
                          </span>
                          Cập nhật kết quả HĐXD
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                        >
                          <span>
                            <BsPencilSquare />
                          </span>
                          Sửa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <span>
                            <BsCheckLg />
                          </span>
                          Duyệt
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <span>
                            <BsXLg />
                          </span>
                          Không duyệt
                        </Dropdown.Item>
                        <Dropdown.Item onClick={GuiYeuCauSua.bind(this, detaicb._id)}>
                          <span>
                            <BsReplyFill />
                          </span>
                          Yêu cầu sửa
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={SelectDeTaiCB.bind(this, detaicb._id)}
                        >
                          <span>
                            <BsCursorFill />
                          </span>
                          Gửi duyệt
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <span>
                            <BsFileEarmarkWord />
                          </span>
                          In thuyết minh
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
export default DeTaiDuyetCapKhoas;
