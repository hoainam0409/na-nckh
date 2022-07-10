import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { VaiTroTGContext } from "../../../contexts/VaiTroTGContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";


const SuaVaiTroTG = () => {
  // Contexts
  const {
    vaitroTGState: { vaitroTG },
    showSuaVaiTroTG,
    setShowSuaVaiTroTG,
    updateVaiTroTG,
    setShowToast,
  } = useContext(VaiTroTGContext);

  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);
  useEffect(() => getCapDeTais(), []);



  // State
  const [updatedVaiTroTG, setUpdatedVaiTroTG] =
    useState(vaitroTG);

  useEffect(() => setUpdatedVaiTroTG(vaitroTG), [vaitroTG]);

  const { ma, ten, capdetai } =
    updatedVaiTroTG;

  const onChangeUpdated = (event) =>
    setUpdatedVaiTroTG({
      ...updatedVaiTroTG,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedVaiTroTG(vaitroTG);
    setShowSuaVaiTroTG(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateVaiTroTG(
      updatedVaiTroTG
    );
    setShowSuaVaiTroTG(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaVaiTroTG} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết vai trò tham gia</Modal.Title>
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
          <Form.Group className="mb-3">
            <Form.Label>Cấp đề tài</Form.Label>
            <Form.Select
              value={capdetai}
              name="capdetai"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            >
              <option>Chọn cấp đề tài</option>
              {capdetais.map((capdetai) => (
                <option key={capdetai._id}>
                  {capdetai.ten}
                </option>
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

export default SuaVaiTroTG;
