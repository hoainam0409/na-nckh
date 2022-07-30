import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";
import { LoaiĐTContext } from '../../../contexts/LoaiĐTContext'

const ThemLoaiĐT = () => {
  //context
  const { showThemLoaiĐT, setShowThemLoaiĐT, addLoaiĐT, setShowToast } =
    useContext(LoaiĐTContext);

  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);

  useEffect(() => getCapDeTais(), []);
  //State
  const [newLoaiĐT, setNewLoaiĐT] = useState({
    ma: "",
    ten: "",
    capdetai: ""

  });
  const { ma, ten, capdetai } =
    newLoaiĐT;

  const onChangeInput = (event) =>
    setNewLoaiĐT({
      ...newLoaiĐT,
      [event.target.name]: event.target.value,
    })
  // console.log(newThongBaoChung);

  const resetAddLoaiĐT = () => {
    setNewLoaiĐT({
      ma: "",
      ten: "",
      capdetai: ""
    });
    setShowThemLoaiĐT(false);
  };
  const closeDialog = () => {
    resetAddLoaiĐT();
  };

  const onSubmit = async event => {
    event.preventDefault()
    const { success, message } = await addLoaiĐT(newLoaiĐT)
    resetAddLoaiĐT()
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
  }

  return (
    <Modal show={showThemLoaiĐT} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới loại đề tài</Modal.Title>
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
export default ThemLoaiĐT;
