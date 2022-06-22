import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const SuaCapDeTai = () => {
  // Contexts
  const {
    capdetaiState: { capdetai },
    showSuaCapDeTai,
    setShowSuaCapDeTai,
    updateCapDeTai,
    setShowToast,
  } = useContext(CapDeTaiContext);

  // State
  const [updatedCapDeTai, setUpdatedCapDeTai] =
    useState(capdetai);

  useEffect(() => setUpdatedCapDeTai(capdetai), [capdetai]);

  const { ma, ten } =
    updatedCapDeTai;

  const onChangeUpdated = (event) =>
    setUpdatedCapDeTai({
      ...updatedCapDeTai,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedCapDeTai(capdetai);
    setShowSuaCapDeTai(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateCapDeTai(
      updatedCapDeTai
    );
    setShowSuaCapDeTai(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaCapDeTai} onHide={closeDialog}>
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

export default SuaCapDeTai;
