import React, { useState, useContext, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SanPhamUDContext } from "../../../contexts/SanPhamUDContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const ThemSanPhamUD = () => {
  //context
  const { showThemSanPhamUD, setShowThemSanPhamUD, addSanPhamUD, setShowToast } =
    useContext(SanPhamUDContext);

  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);
  useEffect(() => getCapDeTais(), []);

  //State
  const [newSanPhamUD, setNewSanPhamUD] = useState({
    ma: "",
    ten: "",
    capdetai: ""
  });
  const { ma, ten, capdetai } =
    newSanPhamUD;

  const onChangeInput = (event) =>
    setNewSanPhamUD({
      ...newSanPhamUD,
      [event.target.name]: event.target.value,
    })
  // console.log(newThongBaoChung);

  const resetAddSanPhamUD = () => {
    setNewSanPhamUD({
      ma: "",
      ten: "",
      capdetai: ""
    })
    setShowThemSanPhamUD(false);
  };
  const closeDialog = () => {
    resetAddSanPhamUD();
  };

  const onSubmit = async event => {
    event.preventDefault()
    const { success, message } = await addSanPhamUD(newSanPhamUD)
    resetAddSanPhamUD()
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
  }

  return (
    <Modal show={showThemSanPhamUD} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới loại sản phẩm ứng dụng</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Mã</Form.Label>
                <Form.Control
                  type="text"
                  name="ma"
                  required
                  aria-describedby="title-help"
                  value={ma}
                  onChange={onChangeInput}
                />
              </Form.Group></Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  name="ten"
                  required
                  aria-describedby="title-help"
                  value={ten}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Cấp đề tài</Form.Label>
            <Form.Select
              name="capdetai"
              required
              aria-describedby="title-help"
              value={capdetai}
              onChange={onChangeInput}
            >
              <option>Chọn</option>
              {capdetais.map((capdetai) => (
                <option key={capdetai._id}>{capdetai.ten}</option>
              ))}
            </Form.Select>
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
export default ThemSanPhamUD;
