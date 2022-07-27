import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { BsCloudUploadFill } from "react-icons/bs";

const CapNhatHopDong = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showCapNhatQuyetDinh,
    setShowCapNhatQuyetDinh,
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
    setShowCapNhatQuyetDinh(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowCapNhatQuyetDinh(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showCapNhatQuyetDinh} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật hợp đồng thực hiện đề tài </Modal.Title>
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
              type="text"
              name="tendetai"
              aria-describedby="title-help"
              value={tendetai}
              disabled
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
            <h1>THÔNG TIN HỢP ĐÔNG</h1>
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
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Người ký</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Chức vụ ký</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div>
            <div>
              <div>Danh sách tài liệu</div>
              <Button style={{ float: "right" }}>
                <BsCloudUploadFill />
              </Button>
            </div>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Tên tài liệu</th>
                  <th>Kích thước</th>
                  <th>Ngày tạo</th>
                  <th>Phiên bản</th>
                  <th className="chucnang">Chức năng</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
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

export default CapNhatHopDong;
