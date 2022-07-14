import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import SideBar from "../../sidebar/SideBar";
import ThemHoiDong from "./ThemHoiDong";
import SuaHoiDong from "./SuaHoiDong";
import ReactTooltip from "react-tooltip";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill, BsFileEarmarkWord, BsFileEarmarkZip } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const HoiDongs = () => {
  const {
    hoidongState: { hoidong, hoidongs, hoidongsLoading },
    getHoiDongs,
    setShowThemHoiDong,
    showToast: { show, message, type },
    setShowToast,
    deleteHoiDong,
    findHoiDong,
    setShowSuaHoiDong,
  } = useContext(HoiDongContext);

  // Start: Get all
  useEffect(() => getHoiDongs(), []);

  const chooseHoiDong = (hoidongId) => {
    findHoiDong(hoidongId);
    setShowSuaHoiDong(true);
  };
  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <div>
          <h1>Danh sách hội đồng khoa học</h1>
          <div className="filter">
            <Row className="controls">
              <Col>
                <Form.Select>
                  <option value="">Chọn loại hội đồng</option>
                  <option value="Hội đồng đánh giá">Hội đồng đánh giá</option>
                  <option value="Hội đồng nghiệm thu">Hội đồng nghiệm thu</option>
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
        <Button
          style={{
            marginTop: "70px",
            marginBottom: "20px",
            backgroundColor: "#337AB7",
            borderColor: "#2d6da3",
          }}
          onClick={setShowThemHoiDong.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemHoiDong />
        {hoidong !== null && <SuaHoiDong />}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr className="table-header">
              <th>Tên hội đồng</th>
              <th>Loại hội đồng</th>
              <th>Ngày đề nghị</th>
              <th>Năm</th>
              <th className="chucnang">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {hoidongs.map((hoidong) => (
              <tr key={hoidong._id}>
                <td onClick={chooseHoiDong.bind(this, hoidong._id)}>
                  {hoidong.tenhoidong}{" "}
                </td>
                <td>{hoidong.loaihoidong}</td>
                <td>{new Date(hoidong.ngaydenghi).toLocaleDateString(["ban", "id",])} </td>
                <td>{hoidong.nam}</td>
                <td style={{ textAlign: "center" }}>
                  <Dropdown as={ButtonGroup}>
                    <Button
                      style={{ backgroundColor: "#337AB7" }}
                      onClick={chooseHoiDong.bind(this, hoidong._id)}
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
                        onClick={chooseHoiDong.bind(this, hoidong._id)}
                      >
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Quyết định thành lập hội đồng xét duyệt đề tài
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Quyết định thành laaph hội đồng đánh giá
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Quyết định thành lập hội đồng nghiệm thu
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkZip/>
                        </span>
                        Phiếu nhận xét đề tài trọng điểm
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkZip/>
                        </span>
                        Phiếu đánh giá đề tài trọng điểm
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Biên bản kiểm phiếu tổng hợp kết quả
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <BsFileEarmarkWord />
                        </span>
                        Biên bản họp hội đồng đánh giá
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={chooseHoiDong.bind(this, hoidong._id)}
                      >
                        <span>
                          <BsPencilSquare />
                        </span>
                        Sửa
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => deleteHoiDong(hoidong._id)}>
                        <span>
                          <BsTrashFill />
                        </span>
                        Xóa
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

export default HoiDongs;
