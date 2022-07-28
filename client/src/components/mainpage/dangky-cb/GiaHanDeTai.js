import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import {ControlFile} from '../../../until/ControlFile'

const BaoCaoTienDo = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showGiaHanDeTai,
    setShowGiaHanDeTai,
  } = useContext(DeTaiCBContext);

  
  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const { madetai, tendetai, chunhiem} = updatedDeTaiCB;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiCB(detaicb);
    setShowGiaHanDeTai(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowGiaHanDeTai(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showGiaHanDeTai} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Gia hạn thực hiện đề tài </Modal.Title>
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
              onChange={onChangeUpdated}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đề tài</Form.Label>
            <Form.Control
              type="text"
              name="tendetai"
              aria-describedby="title-help"
              value={tendetai}
              onChange={onChangeUpdated}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chủ nhiệm đề tài</Form.Label>
            <Form.Control
              type="text"
              name="chunhiem"
              aria-describedby="title-help"
              value={chunhiem}
              onChange={onChangeUpdated}
              disabled
            />
          </Form.Group>
          <Row>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label>Ngày xin gia hạn</Form.Label>
                <Form.Control
                  name="ngaygiahan"
                  type="date"
                  onChange={onChangeUpdated}
                  aria-label="Default select example"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label>Gia hạn đến ngày</Form.Label>
                <Form.Control
                  name="giahandenngay"
                  type="date"
                  onChange={onChangeUpdated}
                  aria-label="Default select example"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Lý do gia hạn</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="lydo"
              aria-describedby="title-help"
              onChange={onChangeUpdated}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              onChange={onChangeUpdated}
            />
          </Form.Group> */}
          <ControlFile/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Gửi duyệt
          </Button>
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

export default BaoCaoTienDo;
