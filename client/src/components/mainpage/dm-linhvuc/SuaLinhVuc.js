import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { LinhVucContext } from "../../../contexts/LinhVucContext";

const SuaLinhVuc = () => {
  // Contexts
  const {
    linhvucState: { linhvuc },
    showSuaLinhVuc,
    setShowSuaLinhVuc,
    updateLinhVuc,
    setShowToast,
  } = useContext(LinhVucContext);

  // State
  const [updatedLinhVuc, setUpdatedLinhVuc] =
    useState(linhvuc);

  useEffect(() => setUpdatedLinhVuc(linhvuc), [linhvuc]);

  const { ma, ten } =
    updatedLinhVuc;

  const onChangeUpdated = (event) =>
    setUpdatedLinhVuc({
      ...updatedLinhVuc,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedLinhVuc(linhvuc);
    setShowSuaLinhVuc(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateLinhVuc(
      updatedLinhVuc
    );
    setShowSuaLinhVuc(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaLinhVuc} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa cấp đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
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
          </Form.Group>
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

export default SuaLinhVuc;
