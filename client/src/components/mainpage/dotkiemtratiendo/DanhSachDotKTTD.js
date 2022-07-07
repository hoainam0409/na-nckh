import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import { DotKiemTraTĐContext } from "../../../contexts/DotKiemTraTĐContext";
import SideBar from "../../sidebar/SideBar";
import ThemDotKiemTraTĐ from "./ThemDotKTTD";
import SuaDotKiemTraTĐ from "./SuaDotKTTD";
import ReactTooltip from "react-tooltip"
import { BsFillEyeFill, BsPencilSquare, BsTrashFill} from "react-icons/bs";

const DotKiemTraTĐs = () => {

  const {
    dotkiemtraTĐState: { dotkiemtraTĐ, dotkiemtraTĐs, dotkiemtraTĐsLoading },
    getDotKiemTraTĐs,
    setShowThemDotKiemTraTĐ,
    showToast: { show, message, type },
    setShowToast,
    deleteDotKiemTraTĐ,
    findDotKiemTraTĐ,
    setShowSuaDotKiemTraTĐ,
  } = useContext(DotKiemTraTĐContext);

  // Start: Get all
  useEffect(() => getDotKiemTraTĐs(), []);

  const chooseDotKiemTraTĐ = (dotkiemtraTĐId) => {
    findDotKiemTraTĐ(dotkiemtraTĐId);
    setShowSuaDotKiemTraTĐ(true);
  };
  return (
    <div>
      <SideBar />
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <div>
        <h1 style={{fontSize: "24px"}}>Danh sách đợt đăng ký đề tài</h1>
        <div className="filter">
            <Row className="controls">
              <Col>
                <Form.Select>
                  <option value="">Chọn năm</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  <option value="">Chọn trạng thái</option>
                  <option value="Cấp trường">Chưa công khai</option>
                  <option value="Cấp Bộ">Công khai</option>
                  <option value="Cấp Bộ">Hết hạn</option>
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
          onClick={setShowThemDotKiemTraTĐ.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemDotKiemTraTĐ/>
        {dotkiemtraTĐ !== null && <SuaDotKiemTraTĐ/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Tên đợt</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Năm</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Ngày bắt đầu</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Ngày kết thúc</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Trạng Thái</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {dotkiemtraTĐs.map((dotkiemtraTĐ) => (
              <tr key={dotkiemtraTĐ._id}>
                <td>{dotkiemtraTĐ.tendot}</td>
                <td>{dotkiemtraTĐ.nam} </td>
                <td>{new Date(dotkiemtraTĐ.ngaybd).toLocaleDateString()} </td>
                <td>{new Date(dotkiemtraTĐ.ngaykt).toLocaleDateString()} </td>
                <td>{dotkiemtraTĐ.trangthai} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                      margin: '3px'
                    }}
                    onClick={chooseDotKiemTraTĐ.bind(this, dotkiemtraTĐ._id)}
                    data-tip data-for="Xem"
                  >
                  <ReactTooltip id="Xem" place="top" effect="solid">Xem</ReactTooltip>
                    <BsFillEyeFill/>
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                      margin: '3px'
                    }}
                    onClick={chooseDotKiemTraTĐ.bind(this, dotkiemtraTĐ._id)}
                    data-tip data-for="Sửa"
                  >
                   <ReactTooltip id="Sửa" place="top" effect="solid">Sửa</ReactTooltip>
                    <BsPencilSquare/>
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                      margin: '3px'
                    }}
                    onClick={() => deleteDotKiemTraTĐ(dotkiemtraTĐ._id)}
                    data-tip data-for="Xóa"
                  >
                  <ReactTooltip id="Xóa" place="top" effect="solid">Xóa</ReactTooltip> 
                  <BsTrashFill/>
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

export default DotKiemTraTĐs;
