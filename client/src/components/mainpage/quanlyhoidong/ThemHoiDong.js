import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { LoaiHĐContext} from "../../../contexts/LoaiHĐContext";

const ThemHoiDong = () => {
  //context
  const {
    showThemHoiDong,
    setShowThemHoiDong,
    addHoiDong,
    setShowToast,
  } = useContext(HoiDongContext);
  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys,
  } = useContext(DotDangKyContext);
  useEffect(() => getDotDangKys(), []);

  const {
    loaiHĐState: { loaiHĐs },
    getLoaiHĐs,
  } = useContext(LoaiHĐContext);
  useEffect(() => getLoaiHĐs(), []);
  //State
  const [newHoiDong, setNewHoiDong] = useState({
    tenhoidong: "",
    loaihoidong: "",
    dotdangky: "",
    ngaydenghi: "",
    soquyetdinh: "",
    ngayraquyetdinh: "",
    nam: "",
    ghichu: "",
    danhsachthanhvien: [],
    dinhkem: "",
  });

  const {
    tenhoidong,
    loaihoidong,
    dotdangky,
    ngaydenghi,
    soquyetdinh,
    ngayraquyetdinh,
    nam,
    ghichu,
    danhsachthanhvien,
    dinhkem,
  } = newHoiDong;

  const onChangeInput = (event) =>
    setNewHoiDong({
      ...newHoiDong,
      [event.target.name]: event.target.value,
    });

  const resetAddHoiDong = () => {
    setNewHoiDong({
      tenhoidong: "",
      loaihoidong: "",
      dotdangky: "",
      ngaydenghi: "",
      soquyetdinh: "",
      ngayraquyetdinh: "",
      nam: "",
      ghichu: "",
      danhsachthanhvien: [],
      dinhkem: "",
    });
    setShowThemHoiDong(false);
  };
  const closeDialog = () => {
    resetAddHoiDong();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addHoiDong(newHoiDong);
    resetAddHoiDong();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemHoiDong} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới hội đồng</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tên hội đồng</Form.Label>
            <Form.Control
              type="text"
              name="tenhoidong"
              required
              aria-describedby="title-help"
              value={tenhoidong}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Loại hội đồng</Form.Label>
                <Form.Select
                  name="loaihoidong"
                  required
                  aria-describedby="title-help"
                  value={loaihoidong}
                  onChange={onChangeInput}
                >
                  <option value="">Chọn loại hội đồng</option>
                        {
                            loaiHĐs.map((loaiHĐ) => (
                                <option key={loaiHĐ._id}>
                                    {loaiHĐ.ten}
                                </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đợt đăng ký</Form.Label>
                <Form.Select
                  type="text"
                  name="dotdangky"
                  required
                  aria-describedby="title-help"
                  value={dotdangky}
                  onChange={onChangeInput}
                >
                  <option>Chọn đợt đăng ký đề tài</option>
                  {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id} value={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Năm </Form.Label>
                <Form.Control
                  type="text"
                  name="nam"
                  required
                  aria-describedby="title-help"
                  value={nam}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày đề nghị</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaydenghi"
                  aria-describedby="title-help"
                  value={ngaydenghi}
                  onChange={onChangeInput}
                >
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Số quyết định</Form.Label>
                <Form.Control
                  type="text"
                  name="soquyetdinh"
                  aria-describedby="title-help"
                  value={soquyetdinh}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày ra quyết định</Form.Label>
                <Form.Control
                  type="date"
                  name="ngayraquyetdinh"
                  aria-describedby="title-help"
                  value={ngayraquyetdinh}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="ghichu"
              aria-describedby="title-help"
              value={ghichu}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              value={dinhkem}
              onChange={onChangeInput}
            />
          </Form.Group>
          <div>
          <h1>DANH SÁCH THÀNH VIÊN THAM GIA HỘI ĐỒNG</h1>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="danhsachthanhvien"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeInput}
                ></Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò</Form.Label>
                <Form.Select
                  name="danhsachthanhvien"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeInput}
                ></Form.Select>
              </Form.Group>
            </Col>
          </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Lưu
          </Button>
          <Button variant="secondary" onClick={closeDialog}>
            Đóng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default ThemHoiDong;
