import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiSVContext } from "../../../contexts/DeTaiSVContext";

const SuaDeTaiSV = () => {
  // Contexts
  const {
    detaisvState: { detaisv },
    showSuaDeTaiSV,
    setShowSuaDeTaiSV,
    updateDeTaiSV,
    setShowToast,
  } = useContext(DeTaiSVContext);

  // State
  const [updatedDeTaiSV, setUpdatedDeTaiSV] = useState(detaisv);

  useEffect(() => setUpdatedDeTaiSV(detaisv), [detaisv]);

  const {
    madetai,
    tendetai,
    dotdangky,
    GVHD,
    khoaxetduyet,
    linhvucnc,
    noidungnc,
    muctieunc,
    ketquadukien,
    sinhvienthuchien,
    trangthai,
    dinhkem,
  } = updatedDeTaiSV;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiSV({
      ...updatedDeTaiSV,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiSV(dotdangky);
    setShowSuaDeTaiSV(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiSV(updatedDeTaiSV);
    setShowSuaDeTaiSV(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaDeTaiSV} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Mã đề tài</Form.Label>
            <Form.Control
              type="text"
              name="madetai"
              required
              aria-describedby="title-help"
              value={madetai}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đề tài</Form.Label>
            <Form.Control
              type="text"
              name="tendetai"
              required
              aria-describedby="title-help"
              value={tendetai}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đợt đăng ký</Form.Label>
            <Form.Select
              as="select"
              value={dotdangky}
              name="dotdangky"
              onChange={onChangeUpdated}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giảng viên hướng dẫn</Form.Label>
            <Form.Control
              as="select"
              value={GVHD}
              name="GVHD"
              onChange={onChangeUpdated}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Control>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Lĩnh vực nghiên cứu</Form.Label>
                <Form.Select
                  type="select"
                  name="linhvucnc"
                  required
                  aria-describedby="title-help"
                  value={linhvucnc}
                  onChange={onChangeUpdated}
                >
                  <option value="Mở đăng ký">Mở đăng ký</option>
                  <option value="Khóa đăng ký">Khóa đăng ký</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Khoa xét duyệt đề tài</Form.Label>
                <Form.Select
                  type="text"
                  name="khoaxetduyet"
                  required
                  aria-describedby="title-help"
                  value={khoaxetduyet}
                  onChange={onChangeUpdated}
                >
                  <option value="Mở đăng ký">Mở đăng ký</option>
                  <option value="Khóa đăng ký">Khóa đăng ký</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Tóm tắt nội dung nghiên cứu</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ghichu"
              aria-describedby="title-help"
              value={noidungnc}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mục tiêu</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="muctieunc"
              aria-describedby="title-help"
              value={muctieunc}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kết quả dự kiến</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ketquadukien"
              aria-describedby="title-help"
              value={ketquadukien}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh sách sinh viên thực hiện</Form.Label>
            <Form.Select
              as="select"
              value={sinhvienthuchien}
              name="sinhvienthuchien"
              onChange={onChangeUpdated}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              as="select"
              value={trangthai}
              name="trangthai"
              onChange={onChangeUpdated}
            >
              <option value="Mở đăng ký">Mở đăng ký</option>
              <option value="Khóa đăng ký">Khóa đăng ký</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              value={dinhkem}
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

export default SuaDeTaiSV;
