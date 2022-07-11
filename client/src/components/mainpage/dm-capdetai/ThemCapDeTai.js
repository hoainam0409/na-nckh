import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const ThemCapDeTai = () => {
  //context
  const { showThemCapDeTai, setShowThemCapDeTai, addCapDeTai, setShowToast } =
    useContext(CapDeTaiContext);

  //State
  const [newCapDeTai, setNewCapDeTai] = useState({
    ma: "",
    ten: "",
    quytrinh: '',
    doituong: ''

  });
  const { ma, ten, quytrinh, doituong } =
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
      quytrinh: "",
      doituong: ""
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
                  onChange={onChangeInput}
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
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Quy trình xét duyệt</Form.Label>
                <Form.Select
                  value={quytrinh}
                  name="quytrinh"
                  onChange={onChangeInput}
                >
                  <option>Chọn quy trình xét duyệt đề tài</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường trọng điểm">Quy trình xét duyệt đề tài cấp trường trọng điểm phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp bộ GD và ĐT">Quy trình xét duyệt đề tài cấp bộ GD và ĐT phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường">Quy trình xét duyệt đề tài cấp trường phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường sinh viên">Quy trình xét duyệt đề tài cấp trường sinh viên phiên bản 2 </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Quy trình xét duyệt</Form.Label>
                <Form.Select
                  value={doituong}
                  name="doituong"
                  onChange={onChangeInput}
                >
                  <option>Chọn đối tượng tham gia</option>
                  <option value="Cán bộ">Cán bộ</option>
                  <option value="Sinh viên">Sinh viên</option>
                </Form.Select>
              </Form.Group></Col>
          </Row>

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
