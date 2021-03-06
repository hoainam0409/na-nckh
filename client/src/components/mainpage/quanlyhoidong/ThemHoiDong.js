import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { HoiDongContext } from "../../../contexts/HoiDongContext";
import { LoaiHĐContext } from "../../../contexts/LoaiHĐContext";
import { UserContext } from "../../../contexts/UserContext";
import { VaiTroHĐContext } from "../../../contexts/VaiTroHĐContext";
import Table from "react-bootstrap/esm/Table";

const ThemHoiDong = () => {
  //context
  const { showThemHoiDong, setShowThemHoiDong, addHoiDong, setShowToast } =
    useContext(HoiDongContext);
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

  const {
    vaitroHĐState: { vaitroHĐs },
    getVaiTroHĐs,
  } = useContext(VaiTroHĐContext);
  useEffect(() => getVaiTroHĐs(), []);

  //State
  const [newHoiDong, setNewHoiDong] = useState({
    tenhoidong: "",
    loaihoidong: "",
    dotdangky: "",
    caphoidong: "",
    ngaydenghi: "",
    soquyetdinh: "",
    ngayraquyetdinh: "",
    nam: "",
    ghichu: "",
    danhsachthanhvien: [],
    dinhkem: "",
  });

  const {
    tenhoidong,
    loaihoidong,
    caphoidong,
    dotdangky,
    ngaydenghi,
    soquyetdinh,
    ngayraquyetdinh,
    nam,
    ghichu,
    danhsachthanhvien,
    dinhkem,
  } = newHoiDong;

  const onChangeInput = (event) =>
    setNewHoiDong({
      ...newHoiDong,
      [event.target.name]: event.target.value,
    });

  const onChangeUser = (event) => {
    const userSelected = users.find((q) => q._id === event.target.value);
    setNewHoiDong({
      ...newHoiDong,
      [event.target.name]: userSelected,
    });
  };
  const onChangeVaiTro = (event) => {
    const vaitroSelected = vaitroHĐs.find((q) => q._id === event.target.value);
    setNewHoiDong({
      ...newHoiDong,
      [event.target.name]: vaitroSelected,
    });
  };
  const resetAddHoiDong = () => {
    setNewHoiDong({
      tenhoidong: "",
      loaihoidong: "",
      caphoidong: "",
      dotdangky: "",
      ngaydenghi: "",
      soquyetdinh: "",
      ngayraquyetdinh: "",
      nam: "",
      ghichu: "",
      danhsachthanhvien: [],
      dinhkem: "",
    });
    setShowThemHoiDong(false);
  };
  const closeDialog = () => {
    resetAddHoiDong();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addHoiDong(newHoiDong);
    resetAddHoiDong();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showThemHoiDong} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới hội đồng</Modal.Title>
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
              onChange={onChangeInput}
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
                  onChange={onChangeInput}
                >
                  <option value="">Chọn loại hội đồng</option>
                  {loaiHĐs.map((loaiHĐ) => (
                    <option key={loaiHĐ._id}>{loaiHĐ.ten}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Cấp hội đồng</Form.Label>
                <Form.Select
                  type="text"
                  name="caphoidong"
                  aria-describedby="title-help"
                  value={caphoidong}
                  onChange={onChangeInput}
                >
                  <option>Chọn</option>
                  <option>Cấp cơ sở</option>
                  <option>Cấp chủ quản</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Đợt đăng ký</Form.Label>
            <Form.Select
              type="text"
              name="dotdangky"
              required
              aria-describedby="title-help"
              value={dotdangky}
              onChange={onChangeInput}
            >
              <option>Chọn đợt đăng ký đề tài</option>
              {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Thuộc khoa</Form.Label>
                <Form.Select
                  name="khoa"
                  aria-describedby="title-help"
                  // value={khoa}
                  onChange={onChangeInput}
                >
                  {/* <option value="">Chọn khoa</option>
                  {loaiHĐs.map((loaiHĐ) => (
                    <option key={loaiHĐ._id}>{loaiHĐ.ten}</option>
                  ))} */}
                </Form.Select>
              </Form.Group></Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Lĩnh vực</Form.Label>
                <Form.Select
                  // value={linhvuc}
                  name="linhvuc"
                  onChange={onChangeInput}
                  aria-label="Default select example"
                >
                  {/* <option>Chọn lĩnh vực</option>
                  {linhvucs.map((linhvuc) => (
                    <option key={linhvuc._id}>
                      {linhvuc.ten}
                    </option>
                  ))} */}
                </Form.Select>
              </Form.Group></Col>
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
                  onChange={onChangeInput}
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
                  onChange={onChangeInput}
                ></Form.Control>
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
                  onChange={onChangeInput}
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
                  onChange={onChangeInput}
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
              onChange={onChangeInput}
            />
          </Form.Group>
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
          <div>
            <h1>DANH SÁCH THÀNH VIÊN THAM GIA HỘI ĐỒNG</h1>
            {/* <Row>
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
                    value={danhsachthanhvien.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò hội đồng</Form.Label>
                  <Form.Select
                    name="vaitro1"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.vaitro}
                    onChange={onChangeVaiTro}
                  >
                    <option value="">Chọn vai trò</option>
                    {vaitroHĐs.map((vaitroHĐ) => (
                      <option
                        key={vaitroHĐ._id}
                        value={vaitroHĐ._id}
                        name={vaitroHĐ.ten}
                      >
                        {vaitroHĐ.ten}
                      </option>
                    ))}
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
                    value={danhsachthanhvien.donvi}
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
                    required
                    aria-describedby="title-help"
                    value={danhsachthanhvien.hovaten}
                    onChange={onChangeUser}
                  >
                    <option value="">Chọn thành viên</option>
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
                    value={danhsachthanhvien.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò hội đồng</Form.Label>
                  <Form.Select
                    name="vaitro2"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.vaitro}
                    onChange={onChangeVaiTro}
                  >
                    <option value="">Chọn vai trò</option>
                    {vaitroHĐs.map((vaitroHĐ) => (
                      <option
                        key={vaitroHĐ._id}
                        value={vaitroHĐ._id}
                        name={vaitroHĐ.ten}
                      >
                        {vaitroHĐ.ten}
                      </option>
                    ))}
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
                    value={danhsachthanhvien.donvi}
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
                    name="user3"
                    required
                    aria-describedby="title-help"
                    value={danhsachthanhvien.hovaten}
                    onChange={onChangeUser}
                  >
                    <option value="">Chọn thành viên</option>
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
                    name="chucdanhKH3"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò hội đồng</Form.Label>
                  <Form.Select
                    name="vaitro3"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.vaitro}
                    onChange={onChangeVaiTro}
                  >
                    <option value="">Chọn vai trò</option>
                    {vaitroHĐs.map((vaitroHĐ) => (
                      <option
                        key={vaitroHĐ._id}
                        value={vaitroHĐ._id}
                        name={vaitroHĐ.ten}
                      >
                        {vaitroHĐ.ten}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn vị</Form.Label>
                  <Form.Control
                    type="text"
                    name="donvi3"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.donvi}
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
                    name="user4"
                    required
                    aria-describedby="title-help"
                    value={danhsachthanhvien.hovaten}
                    onChange={onChangeUser}
                  >
                    <option value="">Chọn thành viên</option>
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
                    name="chucdanhKH4"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò hội đồng</Form.Label>
                  <Form.Select
                    name="vaitro4"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.vaitro}
                    onChange={onChangeVaiTro}
                  >
                    <option value="">Chọn vai trò</option>
                    {vaitroHĐs.map((vaitroHĐ) => (
                      <option
                        key={vaitroHĐ._id}
                        value={vaitroHĐ._id}
                        name={vaitroHĐ.ten}
                      >
                        {vaitroHĐ.ten}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn vị</Form.Label>
                  <Form.Control
                    type="text"
                    name="donvi4"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.donvi}
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
                    name="user5"
                    required
                    aria-describedby="title-help"
                    value={danhsachthanhvien.hovaten}
                    onChange={onChangeUser}
                  >
                    <option value="">Chọn thành viên</option>
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
                    name="chucdanhKH5"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.chucdanhKH}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vai trò hội đồng</Form.Label>
                  <Form.Select
                    name="vaitro5"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.vaitro}
                    onChange={onChangeVaiTro}
                  >
                    <option value="">Chọn vai trò</option>
                    {vaitroHĐs.map((vaitroHĐ) => (
                      <option
                        key={vaitroHĐ._id}
                        value={vaitroHĐ._id}
                        name={vaitroHĐ.ten}
                      >
                        {vaitroHĐ.ten}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn vị</Form.Label>
                  <Form.Control
                    type="text"
                    name="donvi5"
                    aria-describedby="title-help"
                    value={danhsachthanhvien.donvi}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row> */}
             <Button
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "#337AB7",
                    borderColor: "#2d6da3",
                  }}
                >
                  Thêm mới
                </Button>
                <Table borderless bordered hover style={{ cursor: "pointer" }}>
              <thead>
                <tr className="table-header">
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>CDKH-HV</th>
                  <th>Chức vụ</th>
                  <th>Đơn vị</th>
                  <th>Vai trò hội đồng</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody></tbody>
              </Table>
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
export default ThemHoiDong;
