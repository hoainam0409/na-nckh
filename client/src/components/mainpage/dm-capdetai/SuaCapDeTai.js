import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

  const { ma, ten, quytrinh, doituong } =
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
                  onChange={onChangeUpdated}
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
                  onChange={onChangeUpdated}
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
                  onChange={onChangeUpdated}
                >
                  <option> Chọn quy trình xét duyệt đề tài</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường trọng điểm phiên bản 2">Quy trình xét duyệt đề tài cấp trường trọng điểm phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp bộ GD và ĐT phiên bản 2">Quy trình xét duyệt đề tài cấp bộ GD và ĐT phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường phiên bản 2">Quy trình xét duyệt đề tài cấp trường phiên bản 2</option>
                  <option value="Quy trình xét duyệt đề tài cấp trường sinh viên phiên bản 2" >Quy trình xét duyệt đề tài cấp trường sinh viên phiên bản 2 </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đối tượng tham gia</Form.Label>
                <Form.Select
                  value={doituong}
                  name="doituong"
                  onChange={onChangeUpdated}
                >
                  <option> Chọn đối tượng tham gia</option>
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

export default SuaCapDeTai;
