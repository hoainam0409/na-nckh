import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { LoaiHĐContext} from "../../../contexts/LoaiHĐContext";
import {UserContext} from '../../../contexts/UserContext'

const SuaHoiDong = () => {
  // Contexts
  const {
    hoidongState: { hoidong },
    showSuaHoiDong,
    setShowSuaHoiDong,
    updateHoiDong,
    setShowToast,
  } = useContext(HoiDongContext);
  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys,
  } = useContext(DotDangKyContext);
  useEffect(() => getDotDangKys(), []);

  const {
    loaiHĐState: { loaiHĐs },
    getLoaiHĐs,
  } = useContext(LoaiHĐContext);
  useEffect(() => getLoaiHĐs(), []);

  const {
    userState: { users },
    getUsers,
  } = useContext(UserContext);
  useEffect(() => getUsers(), []);


  // State
  const [updatedHoiDong, setUpdatedHoiDong] = useState(hoidong);

  useEffect(() => setUpdatedHoiDong(hoidong), [hoidong]);

  const {
    tenhoidong,
    loaihoidong,
    dotdangky,
    ngaydenghi,
    soquyetdinh,
    ngayraquyetdinh,
    nam,
    ghichu,
    danhsachthanhvien,
    dinhkem,
  } = updatedHoiDong;

  const onChangeUpdated = (event) =>
    setUpdatedHoiDong({
      ...updatedHoiDong,
      [event.target.name]: event.target.value,
    });
  const onChangeUser = (event) => {
    const userSelected = users.find((q) => q._id === event.target.value);
    setUpdatedHoiDong({
      ...updatedHoiDong,
      [event.target.name]: userSelected,
    });
  };
  const closeDialog = () => {
    setUpdatedHoiDong(hoidong);
    setShowSuaHoiDong(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateHoiDong(updatedHoiDong);
    setShowSuaHoiDong(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaHoiDong} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa cấp đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
      <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tên hội đồng</Form.Label>
            <Form.Control
              type="text"
              name="tenhoidong"
              required
              aria-describedby="title-help"
              value={tenhoidong}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Loại hội đồng</Form.Label>
                <Form.Select
                  name="loaihoidong"
                  required
                  aria-describedby="title-help"
                  value={loaihoidong}
                  onChange={onChangeUpdated}
                >
                  <option value="">Chọn loại hội đồng</option>
                        {
                            loaiHĐs.map((loaiHĐ) => (
                                <option key={loaiHĐ._id}>
                                    {loaiHĐ.ten}
                                </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đợt đăng ký</Form.Label>
                <Form.Select
                  type="text"
                  name="dotdangky"
                  required
                  aria-describedby="title-help"
                  value={dotdangky}
                  onChange={onChangeUpdated}
                >
                  <option>Chọn đợt đăng ký đề tài</option>
                  {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id} value={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
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
                <Form.Label>Ngày đề nghị</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaydenghi"
                  aria-describedby="title-help"
                  value={ngaydenghi}
                  onChange={onChangeUpdated}
                >
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Số quyết định</Form.Label>
                <Form.Control
                  type="text"
                  name="soquyetdinh"
                  aria-describedby="title-help"
                  value={soquyetdinh}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày ra quyết định</Form.Label>
                <Form.Control
                  type="date"
                  name="ngayraquyetdinh"
                  aria-describedby="title-help"
                  value={ngayraquyetdinh}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
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
          <div>
          <h1>DANH SÁCH THÀNH VIÊN THAM GIA HỘI ĐỒNG</h1>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="user1"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeUser}
                >
                   <option value="">Chọn thành viên</option>
                        {
                            users.map((user) => (
                              <option
                              key={user._id}
                              value={user._id}
                              name={user.hovaten}
                            >
                              {user.hovaten}
                            </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò hội đồng</Form.Label>
                <Form.Control
                  name="vaitro1"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="user2"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeUser}
                >
                   <option value="">Chọn thành viên</option>
                        {
                            users.map((user) => (
                              <option
                              key={user._id}
                              value={user._id}
                              name={user.hovaten}
                            >
                              {user.hovaten}
                            </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò hội đồng</Form.Label>
                <Form.Control
                  name="vaitro2"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="user3"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeUser}
                >
                   <option value="">Chọn thành viên</option>
                        {
                            users.map((user) => (
                              <option
                              key={user._id}
                              value={user._id}
                              name={user.hovaten}
                            >
                              {user.hovaten}
                            </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò hội đồng</Form.Label>
                <Form.Control
                  name="vaitro3"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="user4"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeUser}
                >
                   <option value="">Chọn thành viên</option>
                        {
                            users.map((user) => (
                              <option
                              key={user._id}
                              value={user._id}
                              name={user.hovaten}
                            >
                              {user.hovaten}
                            </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò hội đồng</Form.Label>
                <Form.Control
                  name="vaitro4"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Select
                  name="user5"
                  required
                  aria-describedby="title-help"
                  value={danhsachthanhvien.hovaten}
                  onChange={onChangeUser}
                >
                   <option value="">Chọn thành viên</option>
                        {
                            users.map((user) => (
                              <option
                              key={user._id}
                              value={user._id}
                              name={user.hovaten}
                            >
                              {user.hovaten}
                            </option>
                            ))
                        }
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vai trò hội đồng</Form.Label>
                <Form.Control
                  name="vaitro5"
                  aria-describedby="title-help"
                  value={danhsachthanhvien.vaitro}
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
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

export default SuaHoiDong;
