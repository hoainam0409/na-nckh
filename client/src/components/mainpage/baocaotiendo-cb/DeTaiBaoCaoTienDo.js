import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import SideBar from "../../sidebar/SideBar";
import SuaDeTaiCB from "../dangky-cb/SuaDeTaiCB";
import ReactTooltip from "react-tooltip";
import {
  BsFillEyeFill,
  BsFillFileEarmarkWordFill,
  BsPencilSquare,
  BsFileTextFill,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaoCaoTienDo from "./BaoCaoTienDo";

const DeTaiBaoCaoTienDo = () => {
  const {
    detaicbState: { detaicb, detaicbs, detaicbsLoading },
    getDeTaiCBs,
    showToast: { show, message, type },
    setShowToast,
    findDeTaiCB,
    setShowSuaDeTaiCB,
    setShowBaoCaoTienDo,
  } = useContext(DeTaiCBContext);

  // Start: Get all
  useEffect(() => getDeTaiCBs(), []);

  const chooseDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowSuaDeTaiCB(true);
  };
  const SelectDeTaiCB = (detaicbId) => {
    findDeTaiCB(detaicbId);
    setShowBaoCaoTienDo(true);
  };
  return (
    <div>
      <SideBar />
      {detaicb !== null && <BaoCaoTienDo />}
      {detaicb !== null && <SuaDeTaiCB />}
      <div className="style-mainpage">
        <div>
          <h1>Danh sách đề tài báo cáo tiến độ</h1>
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
        <Table
          borderless
          bordered
          hover
          style={{ cursor: "pointer", marginTop: "100px" }}
        >
          <thead>
            <tr className="table-header">
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Đợt đăng ký</th>
              <th>Khoa xét duyệt</th>
              <th>Thành viên tham gia</th>
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
                    <div key={q._id}>-{q.hovaten}</div>
                  ))}
                </td>
                <td>{detaicb.trangthai}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{ backgroundColor: "#337AB7" }}
                    onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                    data-tip
                    data-for="Xem"
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">
                      Xem chi tiết
                    </ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#5bc0de" }}
                    onClick={chooseDeTaiCB.bind(this, detaicb._id)}
                    data-tip
                    data-for="Sửa báo cáo tiến độ"
                  >
                    <ReactTooltip
                      id="Sửa báo cáo tiến độ"
                      place="top"
                      effect="solid"
                    >
                      Sửa báo cáo tiến độ
                    </ReactTooltip>
                    <BsPencilSquare />
                  </Button>
                  <Button
                    variant="success"
                    data-tip
                    data-for="Báo cáo tiến độ"
                    onClick={SelectDeTaiCB.bind(this, detaicb._id)}
                  >
                    <ReactTooltip
                      id="Báo cáo tiến độ"
                      place="top"
                      effect="solid"
                    >
                      Báo cáo tiến độ
                    </ReactTooltip>
                    <BsFileTextFill />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#337AB7" }}
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
export default DeTaiBaoCaoTienDo;
