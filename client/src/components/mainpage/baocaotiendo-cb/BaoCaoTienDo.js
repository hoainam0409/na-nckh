import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { DotKiemTraTĐContext } from '../../../contexts/DotKiemTraTĐContext'

const BaoCaoTienDo = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    updateDeTaiCB,
    setShowToast,
    showBaoCaoTienDo,
    setShowBaoCaoTienDo,
  } = useContext(DeTaiCBContext);

  const {
    dotkiemtraTĐState: { dotkiemtraTĐs },
    getDotKiemTraTĐs

  } = useContext(DotKiemTraTĐContext)
  useEffect(() => getDotKiemTraTĐs(), []);


  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const {
    madetai,
    tendetai,
    dotkiemtraTĐ
  } = updatedDeTaiCB;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiCB(detaicb);
    setShowBaoCaoTienDo(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
    setShowBaoCaoTienDo(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showBaoCaoTienDo} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật tiến độ thực hiện đề tài </Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
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
            <Form.Label>Đợt kiểm tra tiến độ</Form.Label>
            <Form.Select
              value={dotkiemtraTĐ}
              name="dotkiemtraTĐ"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            >
              <option>Chọn đợt kiểm tra tiến độ</option>
              {dotkiemtraTĐs.map((dotkiemtraTĐ) => (
                <option key={dotkiemtraTĐ._id}>
                  {dotkiemtraTĐ.tendot}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div>
            <h1>KINH PHÍ</h1>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Kinh phí được cấp</Form.Label>
                  <Form.Control
                  />
                </Form.Group></Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Kinh phí đã chi</Form.Label>
                  <Form.Control
                  />
                </Form.Group></Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Kinh phí đã quyết toán</Form.Label>
                  <Form.Control
                  />
                </Form.Group></Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Kinh phí chưa quyết toán</Form.Label>
                  <Form.Control
                  />
                </Form.Group></Col>
            </Row>
            <div className="loaisanpham">
              <h2>Giải trình kinh phí </h2>
              <Button>Thêm mới</Button>
              <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      STT
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Nội dung chi
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Ngày chi
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Số tiền
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>


            </div>
            <div className="loaisanpham">
              <h2>Nội dung nghiên cứu </h2>
              <Button>Thêm mới</Button>
              <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      STT
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Nội dung đăng ký
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Ngày bắt đầu
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Ngày kết thúc
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Trạng thái
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>


            </div>
          </div>
          <div>
            <h1>SẢN PHẨM VÀ ỨNG DỤNG</h1>
            <div className="loaisanpham">
              <h2>Sản phẩm khoa học </h2>
              <div className="sanpham">
                <div><h3>Bài báo, báo cáo</h3>
                  <Button>Thêm mới</Button>
                  <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          STT
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Loại bài báo, báo cáo
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Số lượng đăng ký
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Đã thực hiện
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Chức năng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </Table>

                </div>
                <div> <h3>Sách, giáo trình khoa học</h3>
                  <Button>Thêm mới</Button>
                  <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          STT
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Loại sách, giáo trình khoa học
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Số lượng đăng ký
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Đã thực hiện
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Chức năng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </Table>
                </div>
                <div><h3>Sản phẩm khoa học khác</h3>
                  <Button>Thêm mới</Button>
                  <Table borderless bordered hover style={{ cursor: "pointer" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          STT
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Loại sản phẩm khoa học khác
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Số lượng đăng ký
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Đã thực hiện
                        </th>
                        <th style={{ textAlign: "center", color: "#495057" }}>
                          Chức năng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="loaisanpham">
              <h2>Sản phẩm đào tạo </h2>
              <Button>Thêm mới</Button>
              <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      STT
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Loại sản phẩm
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Số lượng đăng ký
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Đã thực hiện
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>

            </div>
            <div className="loaisanpham">
              <h2>Sản phẩm ứng dụng </h2>
              <Button>Thêm mới</Button>
              <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      STT
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Loại sản phẩm
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Số lượng đăng ký
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Đã thực hiện
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </div>
            <div className="loaisanpham">
              <h2>Sản phẩm khác</h2>
              <Button>Thêm mới</Button>
              <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      STT
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Loại sản phẩm
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Số lượng đăng ký
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Đã thực hiện
                    </th>
                    <th style={{ textAlign: "center", color: "#495057" }}>
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </div>
          </div>
          <div>
            <h1>KẾ HOẠCH THỰC HIỆN NGHIÊN CỨU</h1>
            <Button>Thêm mới</Button>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    STT
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Nội dung theo thuyết minh
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Ngày bắt đầu
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Ngày kết thúc
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Chức năng
                  </th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Gửi duyệt
          </Button>
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

export default BaoCaoTienDo;
