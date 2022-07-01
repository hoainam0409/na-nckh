import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DeTaiSVContext } from "../../../contexts/DeTaiSVContext";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { KhoaContext } from '../../../contexts/KhoaContext'
import { LinhVucContext } from '../../../contexts/LinhVucContext'
import { UserContext } from "../../../contexts/UserContext";

const ThemDeTaiSV = () => {
  //context
  const {
    showThemDeTaiSV,
    setShowThemDeTaiSV,
    addDeTaiSV,
    setShowToast,
  } = useContext(DeTaiSVContext);
  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys
  } = useContext(DotDangKyContext);

  useEffect(() => { getDotDangKys() }, []);

  const {
    khoaState: { khoas },
    getKhoas
  } = useContext(KhoaContext)

  useEffect(() => getKhoas(), [])

  const {
    linhvucState: { linhvucs },
    getLinhVucs
  } = useContext(LinhVucContext)

  useEffect(() => getLinhVucs(), [])
  const {
    userState: { users },
    getUsers
  } = useContext(UserContext)

  useEffect(() => getUsers(), [])
  //State
  const [newDeTaiSV, setNewDeTaiSV] = useState({
    madetai: "",
    tendetai: "",
    dotdangky: "",
    GVHD: "",
    khoaxetduyet: "",
    linhvuc: "",
    noidungnc: "",
    muctieunc: "",
    ketquadukien: "",
    sinhvienthuchien: "",
    trangthai: "",
    dinhkem: "",
  });

  const {
    madetai,
    tendetai,
    dotdangky,
    GVHD,
    khoaxetduyet,
    linhvuc,
    noidungnc,
    muctieunc,
    ketquadukien,
    sinhvienthuchien,
    trangthai,
    dinhkem,
  } = newDeTaiSV;

  const onChangeInput = (event) =>
    setNewDeTaiSV({
      ...newDeTaiSV,
      [event.target.name]: event.target.value,
    });

  const resetAddDeTaiSV = () => {
    setNewDeTaiSV({
      madetai: "",
      tendetai: "",
      dotdangky: "",
      GVHD: "",
      khoaxetduyet: "",
      linhvuc: "",
      noidungnc: "",
      muctieunc: "",
      ketquadukien: "",
      sinhvienthuchien: "",
      trangthai: "",
      dinhkem: "",
    });
    setShowThemDeTaiSV(false);
  };
  const closeDialog = () => {
    resetAddDeTaiSV();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addDeTaiSV(newDeTaiSV);
    resetAddDeTaiSV();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemDeTaiSV} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới đề tài sinh viên</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Mã đề tài</Form.Label>
            <Form.Control
              type="text"
              name="madetai"
              aria-describedby="title-help"
              value={madetai}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đề tài</Form.Label>
            <Form.Control
              type="text"
              name="tendetai"
              required
              aria-describedby="title-help"
              value={tendetai}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đợt đăng ký</Form.Label>
            <Form.Select
              value={dotdangky}
              name="dotdangky"
              onChange={onChangeInput}
              aria-label="Default select example"
            >
              <option>Chọn đợt đăng ký đề tài</option>
              {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id} value={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giảng viên hướng dẫn</Form.Label>
            <Form.Select
              value={GVHD}
              name="GVHD"
              onChange={onChangeInput}
              aria-label="Default select example"
            >
              <option>Chọn GVHD</option>
              {users.map((user) => (
                <option key={user._id}>{user.hovaten}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Lĩnh vực nghiên cứu</Form.Label>
                <Form.Select
                  value={linhvuc}
                  name="linhvuc"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn lĩnh vực nghiên cứu</option>
                  {linhvucs.map((linhvuc) => (
                    <option key={linhvuc._id} value={linhvuc._id}>{linhvuc.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Khoa xét duyệt đề tài</Form.Label>
                <Form.Select
                  value={khoaxetduyet}
                  name="khoaxetduyet"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn khoa xét duyệt đề tài</option>
                  {khoas.map((khoa) => (
                    <option key={khoa._id} value={khoa._id}>{khoa.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Tóm tắt nội dung nghiên cứu</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="noidungnc"
              aria-describedby="title-help"
              value={noidungnc}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mục tiêu</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="muctieunc"
              aria-describedby="title-help"
              value={muctieunc}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kết quả dự kiến</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ketquadukien"
              aria-describedby="title-help"
              value={ketquadukien}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh sách sinh viên thực hiện</Form.Label>
            <Form.Select
              as="select"
              value={sinhvienthuchien}
              name="sinhvienthuchien"
              onChange={onChangeInput}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              as="select"
              value={trangthai}
              name="trangthai"
              onChange={onChangeInput}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
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
export default ThemDeTaiSV;
