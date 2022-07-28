import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import {ControlFile} from '../../../until/ControlFile'

const CapNhatBienBan = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showCapNhatBienBan,
    setShowCapNhatBienBan,
  } = useContext(DeTaiCBContext);

  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const { madetai, tendetai, chunhiem } = updatedDeTaiCB;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiCB(detaicb);
    setShowCapNhatBienBan(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowCapNhatBienBan(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showCapNhatBienBan} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật biên bản thanh lý đề tài </Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Mã đề tài</Form.Label>
            <Form.Control
              type="text"
              name="madetai"
              aria-describedby="title-help"
              value={madetai}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đề tài</Form.Label>
            <Form.Control
              as = "textarea"
              row = {3}
              name="tendetai"
              disabled
              aria-describedby="title-help"
              value={tendetai}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chủ nhiệm đề tài</Form.Label>
            <Form.Control
              type="text"
              name="chunhiem"
              required
              aria-describedby="title-help"
              value={chunhiem}
              disabled
            />
          </Form.Group>
          <div>
            <h1>THÔNG TIN HỢP ĐỒNG</h1>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Số hợp đồng</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày ký</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Từ ngày</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đến ngày</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                  <Form.Label>Kinh phí được cấp</Form.Label>
                  <Form.Control />
                </Form.Group>
            </Row>
            </div>
          <div>
            <h1>BIÊN BẢN THANH LÝ</h1>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày thanh lý</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nội dung thanh lý</Form.Label>
                  <Form.Control as='textarea' row={5}/>
                </Form.Group>
            </div>
            <ControlFile/>
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

export default CapNhatBienBan;
