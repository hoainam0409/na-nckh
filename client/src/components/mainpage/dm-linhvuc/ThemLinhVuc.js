import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LinhVucContext } from "../../../contexts/LinhVucContext";

const ThemLinhVuc = () => {
  //context
  const { showThemLinhVuc, setShowThemLinhVuc, addLinhVuc, setShowToast } =
    useContext(LinhVucContext);

  //State
  const [newLinhVuc, setNewLinhVuc] = useState({
    ma: "",
    ten: "",
    
  });
  const { ma, ten } =
    newLinhVuc;

  const onChangeInput = (event) =>
    setNewLinhVuc({
      ...newLinhVuc,
      [event.target.name]: event.target.value,
    })
    // console.log(newThongBaoChung);

  const resetAddLinhVuc = () => {
    setNewLinhVuc({
      ma: "",
      ten: "",
    });
    setShowThemLinhVuc(false);
  };
  const closeDialog = () => {
    resetAddLinhVuc();
  };

  const onSubmit = async event => {
      event.preventDefault()
      const { success, message } = await addLinhVuc(newLinhVuc)
      resetAddLinhVuc()
      setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

  return (
    <Modal show={showThemLinhVuc} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới lĩnh vực</Modal.Title>
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
export default ThemLinhVuc;
