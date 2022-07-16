import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ThemDoiTac(props) {
  //State
  const [newSP, setNewSP] = useState({
    hovaten: "",
    noidungphoihop: "",
    kinhphihotro: "",
  });
  const { hovaten, noidungphoihop, kinhphihotro } = newSP;

  const onChangeInput = (event) =>
    setNewSP({
      ...newSP,
      [event.target.name]: event.target.value,
    });
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới đối tác NCKH</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Select
              name="hovaten"
              required
              aria-describedby="title-help"
              value={hovaten}
              onChange={onChangeInput}
            >
              <option></option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung phối hợp</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="noidungphoihop"
              aria-describedby="title-help"
              value={noidungphoihop}
              onChange={onChangeInput}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kinh phí hỗ trợ</Form.Label>
            <Form.Control
              name="kinhphihoto"
              aria-describedby="title-help"
              value={kinhphihotro}
              onChange={onChangeInput}
            >
            </Form.Control>
          </Form.Group>

        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Lưu
        </Button>
        <Button variant="secondary" onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ThemDoiTac;
