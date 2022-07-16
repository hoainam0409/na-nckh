import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";

const ThemSP = () => {
  //context
  const { showThemSP, setShowThemSP } = useContext(DeTaiCBContext);

  //State
  const [newSP, setNewSP] = useState({
    danhmucsp: "",
    loaisp: "",
    soluong: "",
    yeucau: "",
  });
  const { danhmucsp, loaisp, soluong, yeucau } = newSP;

  const onChangeInput = (event) =>
    setNewSP({
      ...newSP,
      [event.target.name]: event.target.value,
    });

  const resetAddSP = () => {
    setNewSP({
      danhmucsp: "",
      loaisp: "",
      soluong: "",
      yeucau: "",
    });
    setShowThemSP(false);
  };
  const closeDialog = () => {
    resetAddSP();
  };

  return (
    <div className='modal-2'>
       <Modal show={showThemSP} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới sản phẩm</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Danh mục sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="danhmucsp"
                  required
                  aria-describedby="title-help"
                  value={danhmucsp}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="loaisp"
                  required
                  aria-describedby="title-help"
                  value={loaisp}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              type="number"
              value={soluong}
              name="soluong"
              onChange={onChangeInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yêu cầu/ Mô tả chất lượng</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={yeucau}
              name="yeucau"
              onChange={onChangeInput}
            ></Form.Control>
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
    </div>
  );
};
export default ThemSP;
