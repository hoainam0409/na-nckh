import React, { useState, useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DotKiemTraTĐContext } from "../../../contexts/DotKiemTraTĐContext";

const ThemDotKiemTraTĐ = () => {
  //context
  const {
    showThemDotKiemTraTĐ,
    setShowThemDotKiemTraTĐ,
    addDotKiemTraTĐ,
    setShowToast,
  } = useContext(DotKiemTraTĐContext);

  //State
  const [newDotKiemTraTĐ, setNewDotKiemTraTĐ] = useState({
    tendot: "",
    nam: "",
    ngaybd: "",
    ngaykt: "",
    trangthai: "",
    ghichu: "",
    dinhkem: "",
  });

  const { tendot, nam, ngaybd, ngaykt, trangthai, ghichu, dinhkem } =
    newDotKiemTraTĐ;

  const onChangeInput = (event) =>
    setNewDotKiemTraTĐ({
      ...newDotKiemTraTĐ,
      [event.target.name]: event.target.value,
    });

  const resetAddDotKiemTraTĐ = () => {
    setNewDotKiemTraTĐ({
      tendot: "",
      nam: "",
      ngaybd: "",
      ngaykt: "",
      trangthai: "",
      ghichu: "",
      dinhkem: "",
    });
    setShowThemDotKiemTraTĐ(false);
  };
  const closeDialog = () => {
    resetAddDotKiemTraTĐ();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addDotKiemTraTĐ(newDotKiemTraTĐ);
    resetAddDotKiemTraTĐ();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemDotKiemTraTĐ} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới đợt kiểm tra tiến độ</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tên đợt</Form.Label>
            <Form.Control
              type="text"
              name="tendot"
              required
              aria-describedby="title-help"
              value={tendot}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đợt đăng ký đề tài</Form.Label>
            <Form.Select>
              <option>Chọn</option>
            </Form.Select>
              
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Năm </Form.Label>
            <Form.Control
              type="text"
              name="nam"
              required
              aria-describedby="title-help"
              value={nam}
              onChange={onChangeInput}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày bắt đầu </Form.Label>
                <Form.Control
                  type="date"
                  name="ngaybd"
                  required
                  aria-describedby="title-help"
                  value={ngaybd}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày kết thúc</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaykt"
                  required
                  aria-describedby="title-help"
                  value={ngaykt}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              value={trangthai}
              name="trangthai"
              onChange={onChangeInput}
            >
              <option value="Chưa công khai">Chưa công khai</option>
              <option value="Công khai">Công khai</option>
              <option value="Hết hạn">Hết hạn</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="ghichu"
              aria-describedby="title-help"
              value={ghichu}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              value={dinhkem}
              onChange={onChangeInput}
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
export default ThemDotKiemTraTĐ;
