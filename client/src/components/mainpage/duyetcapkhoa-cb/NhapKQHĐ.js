import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { UserContext } from "../../../contexts/UserContext";
import Table from "react-bootstrap/esm/Table";

const NhapKQHĐKhoa = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showNhapKQHĐ,
    setShowNhapKQHĐ,
  } = useContext(DeTaiCBContext);

  const {
    hoidongState: { hoidongs },
    getHoiDongs,
  } = useContext(HoiDongContext);

  useEffect(() => getHoiDongs(), []);
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
    setShowNhapKQHĐ(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowNhapKQHĐ(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showNhapKQHĐ} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Nhập kết quả xét duyệt đề tài</Modal.Title>
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
                <Form.Control disabled />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ủy viên phản biện</Form.Label>
                <Form.Control disabled />
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
              as = "textarea"
              row ={3}
              name="tendetai"
              aria-describedby="title-help"
              value={tendetai}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chủ nhiệm đề tài</Form.Label>
            <Form.Control
              type="text"
              name="chunhiem"
              aria-describedby="title-help"
              value={chunhiem}
              disabled
            />
          </Form.Group>
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
              <tbody>
              </tbody>
            </Table>
            </div>
            <div>
              <h1>PHẦN ĐIỂM SỐ</h1>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Số thành viên hội đồng</Form.Label>
                      <Form.Control></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Số thành viên có mặt</Form.Label>
                      <Form.Control></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Vắng</Form.Label>
                      <Form.Control></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Số đạt</Form.Label>
                      <Form.Control></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Tỷ lệ đạt</Form.Label>
                      <Form.Control></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Kết quả</Form.Label>
                      <Form.Select onChange={onChangeUpdated}>
                        <option>Chọn</option>
                        <option value="Đạt yêu cầu">Đạt yêu cầu</option>
                        <option value="Không đạt yêu cầu">
                          Không đạt yêu cầu
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Kết luận của hội đồng</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
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
          <Button variant="primary" type="submit"> Lưu</Button>
          <Button variant="secondary" onClick={closeDialog}>Đóng</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NhapKQHĐKhoa;
