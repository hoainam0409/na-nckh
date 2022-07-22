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
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

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
      <div className="style-mainpage">
        <div>
          <h1>Danh sách đợt kiểm tra tiến độ</h1>
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
            marginBottom: "20px",
            backgroundColor: "#337AB7",
          }}
          onClick={setShowThemDotKiemTraTĐ.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemDotKiemTraTĐ />
        {dotkiemtraTĐ !== null && <SuaDotKiemTraTĐ />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Tên đợt</th>
              <th>Năm</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Trạng Thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {dotkiemtraTĐs.map((dotkiemtraTĐ) => (
              <tr key={dotkiemtraTĐ._id}>
                <td>{dotkiemtraTĐ.tendot}</td>
                <td>{dotkiemtraTĐ.nam} </td>
                <td>{new Date(dotkiemtraTĐ.ngaybd).toLocaleDateString(["ban", "id",])} </td>
                <td>{new Date(dotkiemtraTĐ.ngaykt).toLocaleDateString(["ban", "id",])} </td>
                <td>{dotkiemtraTĐ.trangthai} </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    onClick={chooseDotKiemTraTĐ.bind(this, dotkiemtraTĐ._id)}
                    data-tip
                    data-for="Xem"
                    variant="primary"
                  >
                    <ReactTooltip id="Xem" place="top" effect="solid">
                      Xem
                    </ReactTooltip>
                    <BsFillEyeFill />
                  </Button>
                  <Button
                    onClick={chooseDotKiemTraTĐ.bind(this, dotkiemtraTĐ._id)}
                    data-tip
                    data-for="Sửa"
                    variant="info"
                  >
                    <ReactTooltip id="Sửa" place="top" effect="solid">
                      Sửa
                    </ReactTooltip>
                    <BsPencilSquare style={{ color: "white" }} />
                  </Button>
                  <Button
                    onClick={() => deleteDotKiemTraTĐ(dotkiemtraTĐ._id)}
                    data-tip
                    data-for="Xóa"
                    variant="danger"
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
  );
};

export default DotKiemTraTĐs;
