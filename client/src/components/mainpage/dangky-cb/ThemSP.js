import React, { useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ThemSP(props) {
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
  return (
    <Modal
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới sản phẩm</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Danh mục sản phẩm</Form.Label>
                <Form.Select
                  name="danhmucsp"
                  required
                  aria-describedby="title-help"
                  value={danhmucsp}
                  onChange={onChangeInput}
                  disabled
                >
                  <option>Bài báo, báo cáo</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Select
                  name="loaisp"
                  aria-describedby="title-help"
                  value={loaisp}
                  onChange={onChangeInput}
                >
                  <option></option>
                  <option>Bài báo, tạp chí thuộc danh mục SCIE</option>
                  <option>Bài báo, tạp chí thuộc danh mục Scopus</option>

                </Form.Select>
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
            <Form.Label>Mô tả yêu cầu về chất lượng</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={yeucau}
              name="yeucau"
              onChange={onChangeInput}
            ></Form.Control>
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
export default ThemSP;
