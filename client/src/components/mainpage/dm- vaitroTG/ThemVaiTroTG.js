import React, { useState, useContext, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { VaiTroTGContext } from "../../../contexts/VaiTroTGContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const ThemVaiTroTG = () => {
  //context
  const { showThemVaiTroTG, setShowThemVaiTroTG, addVaiTroTG, setShowToast } =
    useContext(VaiTroTGContext);

  const {
    capdetaiState: { capdetais },
    getCapDeTais,
  } = useContext(CapDeTaiContext);
  useEffect(() => getCapDeTais(), []);


  //State
  const [newVaiTroTG, setNewVaiTroTG] = useState({
    ma: "",
    ten: "",
    capdetai: ""
  });
  const { ma, ten , capdetai} =
    newVaiTroTG;

  const onChangeInput = (event) =>
    setNewVaiTroTG({
      ...newVaiTroTG,
      [event.target.name]: event.target.value,
    })

  const resetAddVaiTroTG = () => {
    setNewVaiTroTG({
      ma: "",
      ten: "",
      capdetai: ""

    });
    setShowThemVaiTroTG(false);
  };
  const closeDialog = () => {
    resetAddVaiTroTG();
  };

  const onSubmit = async event => {
    event.preventDefault()
    const { success, message } = await addVaiTroTG(newVaiTroTG)
    resetAddVaiTroTG()
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
  }

  return (
    <Modal show={showThemVaiTroTG} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới vai trò tham gia</Modal.Title>
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
          <Form.Group className="mb-3">
                <Form.Label>Cấp đề tài</Form.Label>
                <Form.Select
                  value={capdetai}
                  name="capdetai"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn cấp đề tài</option>
                  {capdetais.map((capdetai) => (
                    <option key={capdetai._id} value={capdetai.ten}>
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
export default ThemVaiTroTG;
