import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/esm/Table";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { UserContext } from "../../../contexts/UserContext";
import {ControlFile} from '../../../until/ControlFile'

const NhapKQNTDeTaiCB = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showNhapKQNT,
    setShowNhapKQNT,
  } = useContext(DeTaiCBContext);

  const {
    hoidongState: { hoidongs },
    getHoiDongs,
  } = useContext(HoiDongContext);

  useEffect(() => getHoiDongs(), []);
  const {
    userState: { users },
    getUsers,
  } = useContext(UserContext);

  useEffect(() => getUsers(), []);

  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const {
    madetai,
    tendetai,
    dotdangky,
    chunhiem,
    thanhvienthamgia,
    ghichu,
    trangthai,
    dinhkem,
    hoidong,
  } = updatedDeTaiCB;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiCB(detaicb);
    setShowNhapKQNT(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowNhapKQNT(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showNhapKQNT} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật thông tin nghiệm thu</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Tên hội đồng</Form.Label>
                <Form.Select
                  value={dotdangky}
                  name="dotdangky"
                  onChange={onChangeUpdated}
                  aria-label="Default select example"
                >
                  <option>Chọn hội đồng</option>
                  {hoidongs.map((hoidong) => (
                    <option key={hoidong._id}>{hoidong.tenhoidong}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Chủ tịch hội đồng</Form.Label>
                <Form.Control disabled/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ủy viên phản biện</Form.Label>
                <Form.Control disabled/>
              </Form.Group>
            </Col>
            <Col>
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
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Tên đề tài</Form.Label>
            <Form.Control
              as="textarea"
              row={3}
              name="tendetai"
              disabled
              aria-describedby="title-help"
              value={tendetai}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chủ nhiệm đề tài</Form.Label>
            <Form.Control
              type="text"
              name="chunhiem"
              disabled
              aria-describedby="title-help"
              value={chunhiem}
            />
          </Form.Group>
          {/* <div>
            <h1>KẾT QUẢ NGHIỆM THU</h1>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Select
                    name="hovaten"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.hovaten}
                    onChange={onChangeUpdated}
                  >
                    <option value="">Chọn thành viên</option>
                    {
                      users.map((user) => (
                        <option key={user._id}>
                          {user.hovaten}
                        </option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò</Form.Label>
                  <Form.Control
                    type="text"
                    name="vaitrothamgia"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.vaitrothamgia}
                    onChange={onChangeUpdated}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Điểm</Form.Label>
                  <Form.Control
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </div> */}
          <div>
            <h1>DANH SÁCH THÀNH VIÊN HỘI ĐỒNG</h1>
            <Table borderless bordered hover>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>CDKH</th>
                  <th>Đơn vị</th>
                  <th>Chức vụ</th>
                  <th>Vai trò hội đồng</th>
                  <th>Vắng</th>
                  <th>Điểm</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Điểm trung bình cuối cùng</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Kết luận</Form.Label>
                <Form.Select>
                  <option>Chọn</option>
                  <option value="Xuất sắc">Xuất sắc</option>
                  <option value="Tốt">Tốt</option>
                  <option value="Khá">Khá</option>
                  <option value="Trung bình">Trung bình</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {/* <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
              value={dinhkem}
              onChange={onChangeUpdated}
            />
          </Form.Group> */}
          <ControlFile/>
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

export default NhapKQNTDeTaiCB;
