import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";


const SuaCapDeTai = () => {
  // Contexts
  const {
    dotdangkyState: { dotdangky },
    showSuaDotDangKy,
    setShowSuaDotDangKy,
    updateDotDangKy,
    setShowToast,
  } = useContext(DotDangKyContext);
  const {
    capdetaiState: { capdetais },
    getCapDeTais
  } = useContext(CapDeTaiContext);
  useEffect(() => getCapDeTais(), [] )

  // State
  const [updatedDotDangKy, setUpdatedDotDangKy] =
    useState(dotdangky);

  useEffect(() => setUpdatedDotDangKy(dotdangky), [dotdangky]);

  const { madot, tendot, nam, capdetai, ngaymodangky, ngaykhoadangky,trangthai, ghichu, dinhkem } =
    updatedDotDangKy;

  const onChangeUpdated = (event) =>
    setUpdatedDotDangKy({
      ...updatedDotDangKy,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDotDangKy(dotdangky);
    setShowSuaDotDangKy(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDotDangKy(
      updatedDotDangKy
    );
    setShowSuaDotDangKy(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaDotDangKy} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa cấp đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Mã đợt</Form.Label>
            <Form.Control
              type="text"
              name="madot"
              required
              aria-describedby="title-help"
              value={madot}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tên đợt</Form.Label>
            <Form.Control
              type="text"
              name="tendot"
              required
              aria-describedby="title-help"
              value={tendot}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Năm </Form.Label>
                <Form.Control
                  type="text"
                  name="nam"
                  required
                  aria-describedby="title-help"
                  value={nam}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Cấp đề tài</Form.Label>
                <Form.Select
                  type="text"
                  name="capdetai"
                  required
                  aria-describedby="title-help"
                  value={capdetai}
                  onChange={onChangeUpdated}
                >
                   <option >Chọn cấp đề tài</option>
                  {capdetais.map((capdetai) => (
                    <option key={capdetai._id}>{capdetai.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày mở đăng ký </Form.Label>
                <Form.Control
                  type="date"
                  name="ngaymodangky"
                  required
                  aria-describedby="title-help"
                  value={ngaymodangky}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày khóa đăng ký</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaykhoadangky"
                  required
                  aria-describedby="title-help"
                  value={ngaykhoadangky}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Control
							as='select'
							value={trangthai}
							name='trangthai'
							onChange={onChangeUpdated}
						>
							<option value='Mở đăng ký'>Mở đăng ký</option>
							<option value='Khóa đăng ký'>Khóa đăng ký</option>
						</Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="ghichu"
              aria-describedby="title-help"
              value={ghichu}
              onChange={onChangeUpdated}
            />
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

export default SuaCapDeTai;
