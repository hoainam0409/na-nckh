import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { KhoaContext } from "../../../contexts/KhoaContext";
import { LinhVucContext } from "../../../contexts/LinhVucContext";
import { UserContext } from "../../../contexts/UserContext";

const NhapKQĐGTaiCB = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    showSuaDeTaiCB,
    setShowSuaDeTaiCB,
    updateDeTaiCB,
    setShowToast,
  } = useContext(DeTaiCBContext);

  const {
    hoidongState: { hoidongs },
    getHoiDongs,
  } = useContext(HoiDongContext);

  useEffect(() => getHoiDongs(), []);
  const {
    khoaState: { khoas },
    getKhoas,
  } = useContext(KhoaContext);

  useEffect(() => getKhoas(), []);

  const {
    linhvucState: { linhvucs },
    getLinhVucs,
  } = useContext(LinhVucContext);

  useEffect(() => getLinhVucs(), []);
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
    capdetai,
    ngaybd,
    ngaykt,
    kinhphi,
    khoaxetduyet,
    linhvuc,
    noidung,
    muctieu,
    ketquadukien,
    sanpham,
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
    setShowSuaDeTaiCB(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowSuaDeTaiCB(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaDeTaiCB} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Nhập kết quả đánh giá đề tài</Modal.Title>
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
                <Form.Control
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ủy viên phản biện</Form.Label>
                <Form.Control
                />
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
                  onChange={onChangeUpdated}
                />
              </Form.Group>
            </Col>
          </Row>
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
            <Form.Label>Chủ nhiệm đề tài</Form.Label>
            <Form.Control
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Điểm trung bình cuối cùng</Form.Label>
                <Form.Control
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Kết luận chung</Form.Label>
                <Form.Select > </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {/* <div>
            <h1>DANH SÁCH THÀNH VIÊN THAM GIA </h1>
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
            </Row>
          </div> */}
          <div>
            <h1>KẾT QUẢ ĐÁNH GIÁ </h1>
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
          </div>
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

export default NhapKQĐGTaiCB;
