import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LoaiSPContext } from "../../../contexts/LoaiSPContext";
import { SanPhamUDContext } from "../../../contexts/SanPhamUDContext";
import { CapDeTaiContext } from "../../../contexts/CapDeTaiContext";

const ThemLoaiSP = () => {
  //context
  const { showThemLoaiSP, setShowThemLoaiSP, addLoaiSP, setShowToast } =
    useContext(LoaiSPContext);

  const { sanphamUDState: { sanphamUDs }, getSanPhamUDs } = useContext(SanPhamUDContext)
  useEffect(() => getSanPhamUDs(), [])

  const { capdetaiState: { capdetais }, getCapDeTais } = useContext(CapDeTaiContext)
  useEffect(() => getCapDeTais(), [])


  //State
  const [newLoaiSP, setNewLoaiSP] = useState({
    ma: "",
    ten: "",
    capdetai: "",
    sanphamUD: ""

  });
  const { ma, ten, capdetai, sanphamUD } =
    newLoaiSP;

  const onChangeInput = (event) =>
    setNewLoaiSP({
      ...newLoaiSP,
      [event.target.name]: event.target.value,
    })
  // console.log(newThongBaoChung);

  const resetAddLoaiSP = () => {
    setNewLoaiSP({
      ma: "",
      ten: "",
      capdetai: "",
      sanphamUD: ""
    });
    setShowThemLoaiSP(false);
  };
  const closeDialog = () => {
    resetAddLoaiSP();
  };

  const onSubmit = async event => {
    event.preventDefault()
    const { success, message } = await addLoaiSP(newLoaiSP)
    resetAddLoaiSP()
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
  }

  return (
    <Modal show={showThemLoaiSP} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới loại sản phẩm NCKH</Modal.Title>
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
                <Form.Label>Danh mục sản phâm ứng dụng</Form.Label>
                <Form.Select
                  name="sanphamUD"
                  required
                  aria-describedby="title-help"
                  value={sanphamUD}
                  onChange={onChangeInput}
                >
                  <option>Chọn</option>
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
                  name="capdetai"
                  required
                  aria-describedby="title-help"
                  value={capdetai}
                  onChange={onChangeInput}
                >
                  <option>Chọn</option>
                  {capdetais.map((capdetai) => (
                    <option key={capdetai._id}>{capdetai.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
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
export default ThemLoaiSP;
