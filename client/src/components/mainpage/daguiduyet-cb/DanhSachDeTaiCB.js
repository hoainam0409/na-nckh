import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import SideBar from "../../sidebar/SideBar";
import NumberFormat from 'react-number-format';
import ReactTooltip from "react-tooltip";
import {
  BsFillEyeFill,
  BsFileEarmarkWord,
  BsDownload
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import XemChiTiet from '../duyetcapkhoa-cb/XemChiTiet'
import ChonTieuChi from './ChonTieuChi'

const DeTaiCBs = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    showToast: { show, message, type },
    setShowToast,
    findDeTaiCB,
    setShowXemDeTaiCB,
    trangThai,
  } = useContext(DeTaiCBContext);

  // const {
  //   dotdangkyState: {dotdangky}
  // } = useContext(DotDangKyContext)

  // Start: Get all
  useEffect(() => getDeTaiCBs(), []);

  const [modalShow, setModalShow] = useState(false);

  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowXemDeTaiCB(true);
  };

  return (
    <div>
      <SideBar />
      {detaicb !== null && <XemChiTiet />}
      <ChonTieuChi
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="style-mainpage">
        <div>
          <h1 style={{ fontSize: "24px" }}>Danh sách đề tài đã gửi duyệt</h1>
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
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <span><BsDownload /></span>
                    Tải xuống
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setModalShow(true)}>
                      <span><BsFileEarmarkWord /></span>
                      Danh mục đề tài
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setModalShow(true)}>
                      <span><BsFileEarmarkWord /></span>
                      Danh mục đề tài được thực hiện
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
        <Table
          borderless
          bordered
          hover
          style={{ cursor: "pointer", marginTop: "128px" }}
        >
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              {/* <th>Cấp đề tài</th> */}
              <th>Đợt đăng ký</th>
              <th>Khoa/Phòng ban xét duyệt</th>
              <th>Chủ nhiệm đề tài</th>
              <th>Thành viên tham gia</th>
              <th>Kinh phí(đồng)</th>
              <th>Trạng thái</th>
              <th className="chucnang">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {detaicbs.map((detaicb) => (
              <tr key={detaicb._id}>
                <td>{detaicb.madetai} </td>
                <td>{detaicb.tendetai}</td>
                {/* <td>{dotdangky.capdetai}</td> */}
                <td>{detaicb.dotdangky} </td>
                <td>{detaicb.khoaxetduyet}</td>
                <td>{detaicb.chunhiem}</td>
                <td>
                  {detaicb.thanhvienthamgia.map((q) => (
                    <div key={q._id}>- {q.hovaten}</div>
                  ))}
                </td>
                <td><NumberFormat value={detaicb.kinhphi} displayType={'text'} thousandSeparator={true} /></td>
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
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Thuyết minh đề tài
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Phiếu báo cáo kết quả thực hiện
                      </Dropdown.Item><Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Quyết định thành lập hội đồng nghiệm thu
                      </Dropdown.Item><Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Đơn xin gia hạn đề tài
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
  );
};

export default DeTaiCBs;
