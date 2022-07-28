import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { SanPhamUDContext } from "../../../contexts/SanPhamUDContext";
import { LoaiSPContext } from "../../../contexts/LoaiSPContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const SuaLoaiSP = () => {
  // Contexts
  const {
    loaisanphamState: { loaisanpham },
    showSuaLoaiSP,
    setShowSuaLoaiSP,
    updateLoaiSP,
    setShowToast,
  } = useContext(LoaiSPContext);

  const { sanphamUDState: { sanphamUDs}, getSanPhamUDs  } = useContext(SanPhamUDContext)
  useEffect(() => getSanPhamUDs(), [])

  const { capdetaiState: { capdetais }, getCapDeTais } = useContext(CapDeTaiContext)
  useEffect(() => getCapDeTais(), [])


  // State
  const [updatedLoaiSP, setUpdatedLoaiSP] =
    useState(loaisanpham);

  useEffect(() => setUpdatedLoaiSP(loaisanpham), []);

  const { ma, ten, capdetai, sanphamUD } =
    updatedLoaiSP;

  const onChangeUpdated = (event) =>
    setUpdatedLoaiSP({
      ...updatedLoaiSP,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedLoaiSP(loaisanpham);
    setShowSuaLoaiSP(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateLoaiSP(
      updatedLoaiSP
    );
    setShowSuaLoaiSP(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaLoaiSP} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết loại sản phẩm NCKH</Modal.Title>
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
                <Form.Label>Danh mục loại sản phẩm ứng dụng</Form.Label>
                <Form.Select
                  value={sanphamUD}
                  name="sanphamUD"
                  onChange={onChangeUpdated}
                >
                  <option> Chọn </option>
                  {sanphamUDs.map((sanphamUD) => (
                    <option key={sanphamUD._id}>{sanphamUD.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label>Cấp đề tài</Form.Label>
                <Form.Select
                  value={capdetai}
                  name="capdetai"
                  onChange={onChangeUpdated}
                >
                  <option> Chọn </option>
                  {capdetais.map((capdetai) => (
                    <option key={capdetai._id}>{capdetai.ten}</option>
                  ))}
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

export default SuaLoaiSP;
