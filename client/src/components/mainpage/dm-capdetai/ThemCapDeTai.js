import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const ThemCapDeTai = () => {
  //context
  const { showThemCapDeTai, setShowThemCapDeTai, addCapDeTai, setShowToast } =
    useContext(CapDeTaiContext);

  //State
  const [newCapDeTai, setNewCapDeTai] = useState({
    ma: "",
    ten: "",
    
  });
  const { ma, ten } =
    newCapDeTai;

  const onChangeInput = (event) =>
    setNewCapDeTai({
      ...newCapDeTai,
      [event.target.name]: event.target.value,
    })
    // console.log(newThongBaoChung);

  const resetAddCapDeTai = () => {
    setNewCapDeTai({
      ma: "",
      ten: "",
    });
    setShowThemCapDeTai(false);
  };
  const closeDialog = () => {
    resetAddCapDeTai();
  };

  const onSubmit = async event => {
      event.preventDefault()
      const { success, message } = await addCapDeTai(newCapDeTai)
      resetAddCapDeTai()
      setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

  return (
    <Modal show={showThemCapDeTai} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới cấp đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit = {onSubmit}>
        <Modal.Body>
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
          </Form.Group>
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
export default ThemCapDeTai;
