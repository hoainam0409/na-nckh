import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";
import { ControlFile } from "../../../until/ControlFile";

const ThemDotDangKy = () => {
  //context
  const {
    showThemDotDangKy,
    setShowThemDotDangKy,
    addDotDangKy,
    setShowToast,
  } = useContext(DotDangKyContext);
  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);
  useEffect(() => getCapDeTais(), []);
  //State
  const [newDotDangKy, setNewDotDangKy] = useState({
    madot: "",
    tendot: "",
    nam: "",
    capdetai: "",
    ngaymodangky: "",
    ngaykhoadangky: "",
    thoihanduyetcapkhoa: "",
    thoihanduyetcaptruong: "",
    thoihannghiemthu: "",
    trangthai: "",
    ghichu: "",
    dinhkem: "",
  });

  const {
    madot,
    tendot,
    nam,
    ngaymodangky,
    ngaykhoadangky,
    thoihanduyetcapkhoa,
    thoihanduyetcaptruong,
    thoihannghiemthu,
    capdetai,
    trangthai,
    ghichu,
    dinhkem,
  } = newDotDangKy;

  const [validated, setValidated] = useState(false);

  const onChangeInput = (event) =>
    setNewDotDangKy({
      ...newDotDangKy,
      [event.target.name]: event.target.value,
    });

  const resetAddDotDangKy = () => {
    setNewDotDangKy({
      madot: "",
      tendot: "",
      nam: "",
      capdetai: "",
      ngaymodangky: "",
      ngaykhoadangky: "",
      thoihanduyetcapkhoa: "",
      thoihanduyetcaptruong: "",
      thoihannghiemthu: "",
      trangthai: "",
      ghichu: "",
      dinhkem: "",
    });
    setShowThemDotDangKy(false);
  };
  const closeDialog = () => {
    resetAddDotDangKy();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addDotDangKy(newDotDangKy);
    resetAddDotDangKy();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Modal show={showThemDotDangKy} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới đợt đăng ký đề tài</Modal.Title>
      </Modal.Header>
      <Form validated={validated} onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Mã đợt</Form.Label>
            <Form.Control
              type="text"
              name="madot"
              required
              // isInvalid 
              aria-describedby="title-help"
              value={madot}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đợt</Form.Label>
            <Form.Control
              type="text"
              name="tendot"
              required
              aria-describedby="title-help"
              value={tendot}
              onChange={onChangeInput}
            />
          </Form.Group>
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
                <Form.Label>Cấp đề tài</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="capdetai"
                  required
                  aria-describedby="title-help"
                  value={capdetai}
                  onChange={onChangeInput}
                >
                  <option>Chọn cấp đề tài</option>
                  {capdetais.map((capdetai) => (
                    <option key={capdetai._id}>{capdetai.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày mở đăng ký </Form.Label>
                <Form.Control
                  type="date"
                  name="ngaymodangky"
                  required
                  aria-describedby="title-help"
                  value={ngaymodangky}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày khóa đăng ký</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaykhoadangky"
                  required
                  aria-describedby="title-help"
                  value={ngaykhoadangky}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Thời hạn xét duyệt cấp Khoa/Phòng</Form.Label>
                <Form.Control
                  type="date"
                  name="thoihanduyetcapkhoa"
                  aria-describedby="title-help"
                  required
                  value={thoihanduyetcapkhoa}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Thời hạn xét duyệt cấp trường</Form.Label>
                <Form.Control
                  type="date" dateFormat="dd/mm/yyyy"
                  name="thoihanduyetcaptruong"
                  aria-describedby="title-help"
                  required
                  value={thoihanduyetcaptruong}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Thời hạn nghiệm thu</Form.Label>
            <Form.Control
              type="date"
              name="thoihannghiemthu"
              aria-describedby="title-help"
              value={thoihannghiemthu}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              value={trangthai}
              name="trangthai"
              onChange={onChangeInput}
            >
              <option value=''>Chọn</option>
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
          </Form.Group>
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
          <Form.Group>
            <Form.Check type="type" label="Gửi thông báo công khai"/>
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              value={dinhkem}
              onChange={onChangeInput}
            />
          </Form.Group> */}
          <ControlFile/>
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
export default ThemDotDangKy;
