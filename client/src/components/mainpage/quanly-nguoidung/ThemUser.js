import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserContext } from "../../../contexts/UserContext";
import { KhoaContext } from "../../../contexts/KhoaContext";
import { ChucVuContext } from "../../../contexts/ChucVuContext";


const ThemUser = () => {
  //context
  const { showThemUser, setShowThemUser, addUser, setShowToast } =
    useContext(UserContext);
  const {
    khoaState: { khoas },
    getKhoas,
  } = useContext(KhoaContext);

  useEffect(() => getKhoas(), []);

  const {
    chucvuState: { chucvus },
    getChucVus,
  } = useContext(ChucVuContext);
  useEffect(() => getChucVus(), []);
  // console.log(chucvus)

  //State
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    hovaten: "",
    phongban: "",
    chucvu: "",
    hocham: "",
    hocvi: "",
  });
  const { username, hovaten, password, phongban, chucvu, hocham, hocvi } =
    newUser;

  const onChangeInput = (event) =>
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });


  const resetAddUser = () => {
    setNewUser({
      username: "",
      password: "",
      hovaten: "",
      phongban: "",
      chucvu: "",
      hocham: "",
      hocvi: "",
    });
    setShowThemUser(false);
  };
  const closeDialog = () => {
    resetAddUser();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addUser(newUser);
    resetAddUser();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemUser} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới cán bộ</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              name="hovaten"
              required
              aria-describedby="title-help"
              value={hovaten}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Tài khoản</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  required
                  aria-describedby="title-help"
                  value={username}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  required
                  aria-describedby="title-help"
                  value={password}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đơn vị</Form.Label>
                <Form.Select
                  type="text"
                  name="phongban"
                  aria-describedby="title-help"
                  value={phongban}
                  onChange={onChangeInput}
                >
                  <option>Chọn đơn vị</option>
                  {khoas.map((khoa) => (
                    <option key={khoa._id}>{khoa.ten}</option>
                  ))}
                  
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Chức vụ</Form.Label>
                <Form.Select
                  type="text"
                  name="chucvu"
                  aria-describedby="title-help"
                  value={chucvu}
                  onChange={onChangeInput}
                >
                  <option>Chọn chức vụ</option>
                  {chucvus.map((chucvu) => (
                    <option key={chucvu._id}>{chucvu.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Học hàm</Form.Label>
                <Form.Control
                  type="text"
                  name="hocham"
                  aria-describedby="title-help"
                  value={hocham}
                  onChange={onChangeInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Học vị</Form.Label>
                <Form.Control
                  type="text"
                  name="hocvi"
                  aria-describedby="title-help"
                  value={hocvi}
                  onChange={onChangeInput}
                />
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
export default ThemUser;
