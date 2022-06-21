import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";

const SuaThongBao = () => {
  // Contexts
  const {
    thongbaochungState: { thongbaochung },
    showSuaThongBaoChung,
    setShowSuaThongBaoChung,
    updateThongBaoChung,
    setShowToast,
  } = useContext(ThongbaochungContext);

  // State
  const [updatedThongBaoChung, setUpdatedThongBaoChung] =
    useState(thongbaochung);

  useEffect(() => setUpdatedThongBaoChung(thongbaochung), [thongbaochung]);

  const { tieude, nguoithongbao, ngaythongbao, noidung, dinhkem } =
    updatedThongBaoChung;

  const onChangeUpdated = (event) =>
    setUpdatedThongBaoChung({
      ...updatedThongBaoChung,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedThongBaoChung(thongbaochung);
    setShowSuaThongBaoChung(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateThongBaoChung(
      updatedThongBaoChung
    );
    setShowSuaThongBaoChung(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaThongBaoChung} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa thông báo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              name="tieude"
              required
              aria-describedby="title-help"
              value={tieude}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Người thông báo</Form.Label>
            <Form.Control
              type="text"
              name="nguoithongbao"
              required
              aria-describedby="title-help"
              value={nguoithongbao}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ngày thông báo</Form.Label>
            <Form.Control
              type="date"
              name="ngaythongbao"
              value={ngaythongbao}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="noidung"
              value={noidung}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>File đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
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

export default SuaThongBao;
