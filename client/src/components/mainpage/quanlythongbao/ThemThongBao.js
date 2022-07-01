import React, { useState, useContext, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import {UserContext} from "../../../contexts/UserContext";

const ThemThongBao = () => {
  //context
  const { showThemThongBao, setShowThemThongBao, addThongBaoChung, setShowToast } =
    useContext(ThongbaochungContext);

  const {
    userState: {users},
    getUsers
  } = useContext(UserContext)  

  useEffect(() => getUsers(), [] )

  //State
  const [newThongBaoChung, setNewThongBaoChung] = useState({
    tieude: "",
    nguoithongbao: "",
    ngaythongbao: "",
    noidung: "",
    dinhkem: "",
  });
  const { tieude, nguoithongbao, ngaythongbao, noidung, dinhkem } =
    newThongBaoChung;

  const onChangeInput = (event) =>
    setNewThongBaoChung({
      ...newThongBaoChung,
      [event.target.name]: event.target.value,
    })
    // console.log(newThongBaoChung);

  const resetAddThongBaoChung = () => {
    setNewThongBaoChung({
      tieude: "",
      nguoithongbao: "",
      ngaythongbao: "",
      noidung: "",
      dinhkem: "",
    });
    setShowThemThongBao(false);
  };
  const closeDialog = () => {
    resetAddThongBaoChung();
  };

  const onSubmit = async event => {
      event.preventDefault()
      const { success, message } = await addThongBaoChung(newThongBaoChung)
      resetAddThongBaoChung()
      setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

  return (
    <Modal show={showThemThongBao} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới thông báo</Modal.Title>
      </Modal.Header>
      <Form onSubmit = {onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              name="tieude"
              required
              aria-describedby="title-help"
              value={tieude}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Người thông báo</Form.Label>
            <Form.Select
              type="text"
              name="nguoithongbao"
              required
              aria-describedby="title-help"
              value={nguoithongbao}
              onChange={onChangeInput}
            >
              <option>Chọn người thông báo</option>
              {users.map((user) => (
                <option key={user._id}>{user.hovaten}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ngày thông báo</Form.Label>
            <Form.Control
              type="date"
              name="ngaythongbao"
              value={ngaythongbao}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="noidung"
              value={noidung}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>File đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
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
export default ThemThongBao;
