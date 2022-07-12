import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { KhoaContext } from "../../../contexts/KhoaContext";
import { LinhVucContext } from "../../../contexts/LinhVucContext";
import { UserContext } from "../../../contexts/UserContext";
import { VaiTroTGContext } from "../../../contexts/VaiTroTGContext";
import SanPham from "./SanPham";

const ThemDeTaiCB = () => {
  //context
  const { showThemDeTaiCB, setShowThemDeTaiCB, addDeTaiCB, setShowToast } =
    useContext(DeTaiCBContext);

  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys,
  } = useContext(DotDangKyContext);

  useEffect(() => {getDotDangKys()}, []);

  const {
    khoaState: { khoas },
    getKhoas,
  } = useContext(KhoaContext);

  useEffect(() => getKhoas(), []);
  // console.log(khoas)

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

  const {
    vaitroTGState: { vaitroTGs },
    getVaiTroTGs,
  } = useContext(VaiTroTGContext);
  useEffect(() => getVaiTroTGs(), []);

  //State
  const [newDeTaiCB, setNewDeTaiCB] = useState({
    madetai: "",
    tendetai: "",
    dotdangky: "",
    capdetai: "",
    ngaybd: "",
    ngaykt: "",
    kinhphi: "",
    khoaxetduyet: "",
    linhvuc: "",
    noidung: "",
    muctieu: "",
    ketquadukien: "",
    sanpham: "",
    ghichu: "",
    thanhvienthamgia: [],
    trangthai: "Đăng ký",
    dinhkem: "",
  });

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
  } = newDeTaiCB;

  const onChangeInput = (event) =>
    setNewDeTaiCB({
      ...newDeTaiCB,
      [event.target.name]: event.target.value,
    });

  const onChangeUser = (event) => {
    const userSelected = users.find((q) => q._id === event.target.value);
    setNewDeTaiCB({
      ...newDeTaiCB,
      [event.target.name]: userSelected,
    });
  };

  const onChangeVaiTroThamGia = (event) => {
    const vaitroSelected = vaitroTGs.find((q) => q._id === event.target.value);
    setNewDeTaiCB({
      ...newDeTaiCB,
      [event.target.name]: vaitroSelected,
    });
  };

  const resetAddDeTaiCB = () => {
    setNewDeTaiCB({
      madetai: "",
      tendetai: "",
      dotdangky: "",
      capdetai: "",
      ngaybd: "",
      ngaykt: "",
      kinhphi: "",
      khoaxetduyet: "",
      linhvuc: "",
      noidung: "",
      muctieu: "",
      ketquadukien: "",
      sanpham: "",
      thanhvienthamgia: [],
      ghichu: "",
      trangthai: "Đăng ký",
      dinhkem: "",
    });
    setShowThemDeTaiCB(false);
  };
  const closeDialog = () => {
    resetAddDeTaiCB();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addDeTaiCB(newDeTaiCB);
    resetAddDeTaiCB();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemDeTaiCB} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới đề tài</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đợt đăng ký</Form.Label>
                <Form.Select
                  value={dotdangky}
                  name="dotdangky"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn đợt đăng ký đề tài</option>
                  {dotdangkys.map((dotdangky) => (
                    <option key={dotdangky._id} value ={dotdangky._id}>
                      {dotdangky.tendot}
                    </option>
                  ))}
                </Form.Select>
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
                  onChange={onChangeInput}
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
              onChange={onChangeInput}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày bắt đầu</Form.Label>
                <Form.Control
                  value={ngaybd}
                  name="ngaybd"
                  type="date"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày kết thúc</Form.Label>
                <Form.Control
                  value={ngaykt}
                  name="ngaykt"
                  type="date"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Kinh phí thực hiện</Form.Label>
            <Form.Control
              value={kinhphi}
              name="kinhphi"
              type="number"
              onChange={onChangeInput}
              aria-label="Default select example"
            ></Form.Control>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Lĩnh vực nghiên cứu</Form.Label>
                <Form.Select
                  value={linhvuc}
                  name="linhvuc"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn lĩnh vực nghiên cứu</option>
                  {linhvucs.map((linhvuc) => (
                    <option key={linhvuc._id}>
                      {linhvuc.ten}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Khoa xét duyệt đề tài</Form.Label>
                <Form.Select
                  value={khoaxetduyet}
                  name="khoaxetduyet"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  <option>Chọn khoa xét duyệt đề tài</option>
                  {khoas.map((khoa) => (
                    <option key={khoa._id}>
                      {khoa.ten}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Tóm tắt nội dung nghiên cứu</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="noidung"
              aria-describedby="title-help"
              value={noidung}
              onChange={onChangeInput}
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Kết quả dự kiến</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ketquadukien"
              aria-describedby="title-help"
              value={ketquadukien}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ghichu"
              aria-describedby="title-help"
              value={ghichu}
              onChange={onChangeInput}
            />
          </Form.Group>
          <div>
            <h1>DANH SÁCH THÀNH VIÊN THAM GIA </h1>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Select
                    name="user1"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.hovaten}
                    onChange={onChangeUser}
                  >
                    <option >Chọn thành viên</option>
                    {users.map((user) => (
                      <option
                        key={user._id}
                        value={user._id}
                        name={user.hovaten}
                      >
                        {user.hovaten}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>CDKH-HV</Form.Label>
                  <Form.Control
                    type="text"
                    name="chucdanhKH1"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò</Form.Label>
                  <Form.Select
                    name="vaitrothamgia1"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.vaitrothamgia}
                    onChange={onChangeVaiTroThamGia}
                  >
                    <option value="">Chọn vai trò</option>
                    {
                      vaitroTGs.map((vaitroTG) => (
                        <option
                          key={vaitroTG._id}
                          value={vaitroTG._id}
                          name={vaitroTG.ten}
                        >
                          {vaitroTG.ten}
                        </option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn vị</Form.Label>
                  <Form.Control
                    type="text"
                    name="donvi1"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.donvi}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Select
                    name="user2"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.hovaten}
                    onChange={onChangeUser}
                  >
                    <option>Chọn thành viên</option>
                    {users.map((user) => (
                      <option
                        key={user._id}
                        value={user._id}
                        name={user.hovaten}
                      >
                        {user.hovaten}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>CDKH-HV</Form.Label>
                  <Form.Control
                    type="text"
                    name="chucdanhKH2"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò</Form.Label>
                  <Form.Select
                    name="vaitrothamgia2"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.vaitrothamgia}
                    onChange={onChangeVaiTroThamGia}
                  >
                    <option value="">Chọn vai trò</option>
                    {
                      vaitroTGs.map((vaitroTG) => (
                        <option
                          key={vaitroTG._id}
                          value={vaitroTG._id}
                          name={vaitroTG.ten}
                        >
                          {vaitroTG.ten}
                        </option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn vị</Form.Label>
                  <Form.Control
                    type="text"
                    name="donvi2"
                    aria-describedby="title-help"
                    value={thanhvienthamgia.donvi}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button style={{ backgroundColor: '#337AB7', borderColor: '#2d6da3', marginBottom: '20px' }}>Thêm mới</Button>
          </div>
          <SanPham />
          <div>
            <h1>ĐỐI TÁC NCKH</h1>
            <Button style={{ backgroundColor: '#337AB7', borderColor: '#2d6da3', marginBottom: '20px' }}>Thêm mới</Button>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    STT
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Tên đơn vị
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Họ và tên đại diện
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Nội dung phối hợp
                  </th>
                  <th style={{ textAlign: "center", color: "#495057" }}>
                    Kinh phí hỗ trợ
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
          <Form.Group className="mb-3">
            <Form.Label>Đính kèm</Form.Label>
            <Form.Control
              type="file"
              name="dinhkem"
              aria-describedby="title-help"
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
export default ThemDeTaiCB;
