import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { LoaiĐTContext } from "../../../contexts/LoaiĐTContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const SuaLoaiĐT = () => {
  // Contexts
  const {
    loaiĐTState: { loaiĐT },
    showSuaLoaiĐT,
    setShowSuaLoaiĐT,
    updateLoaiĐT,
    setShowToast,
  } = useContext(LoaiĐTContext);

  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);

  useEffect(() => getCapDeTais(), []);

  // State
  const [updatedLoaiĐT, setUpdatedLoaiĐT] =
    useState(loaiĐT);

  useEffect(() => setUpdatedLoaiĐT(loaiĐT), []);

  const { ma, ten, capdetai } =
    updatedLoaiĐT;

  const onChangeUpdated = (event) =>
    setUpdatedLoaiĐT({
      ...updatedLoaiĐT,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedLoaiĐT(loaiĐT);
    setShowSuaLoaiĐT(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateLoaiĐT(
      updatedLoaiĐT
    );
    setShowSuaLoaiĐT(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaLoaiĐT} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết loại đề tài</Modal.Title>
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
                  onChange={onChangeUpdated}
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
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Cấp đề tài</Form.Label>
            <Form.Select
              value={capdetai}
              name="capdetai"
              onChange={onChangeUpdated}
            >
              <option> Chọn</option>
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

export default SuaLoaiĐT;
