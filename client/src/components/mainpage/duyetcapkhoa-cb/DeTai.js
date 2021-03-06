import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useContext, useState, useEffect } from "react";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { KhoaContext } from "../../../contexts/KhoaContext";
import { LinhVucContext } from "../../../contexts/LinhVucContext";
import { UserContext } from "../../../contexts/UserContext";
import { VaiTroTGContext } from "../../../contexts/VaiTroTGContext";

const ThongTinDeTai = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    showSuaDeTaiCB,
    setShowSuaDeTaiCB,
    updateDeTaiCB,
    setShowToast,
  } = useContext(DeTaiCBContext);

  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys,
  } = useContext(DotDangKyContext);

  useEffect(() => getDotDangKys(), []);
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

  const {
    vaitroTGState: { vaitroTGs },
    getVaiTroTGs,
  } = useContext(VaiTroTGContext);
  useEffect(() => getVaiTroTGs(), []);

  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const {
    madetai,
    tendetai,
    dotdangky,
    chunhiem,
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
  } = updatedDeTaiCB;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: event.target.value,
    });

  // const closeDialog = () => {
  //   setUpdatedDeTaiCB(detaicb);
  //   setShowSuaDeTaiCB(false);
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const { success, message } = await updateDeTaiCB(updatedDeTaiCB);
  //   setShowSuaDeTaiCB(false);
  //   setShowToast({ show: true, message, type: success ? "success" : "danger" });
  // };

  const onChangeUser = (event) => {
    const userSelected = users.find((q) => q._id === event.target.value);
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: userSelected,
    });
  };
  const onChangeVaiTroThamGia = (event) => {
    const vaitroSelected = vaitroTGs.find((q) => q._id === event.target.value);
    setUpdatedDeTaiCB({
      ...updatedDeTaiCB,
      [event.target.name]: vaitroSelected,
    });
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>?????t ????ng k??</Form.Label>
            <Form.Select
              value={dotdangky}
              name="dotdangky"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            >
              <option>Ch???n ?????t ????ng k?? ????? t??i</option>
              {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>M?? ????? t??i</Form.Label>
            <Form.Control
              type="text"
              name="madetai"
              aria-describedby="title-help"
              value={madetai}
              onChange={onChangeUpdated}
              disabled
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>T??n ????? t??i</Form.Label>
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
        <Form.Label>Ch??? nhi???m ????? t??i</Form.Label>
        <Form.Select
          value={chunhiem}
          name="chunhiem"
          onChange={onChangeUpdated}
          aria-label="Default select example"
        >
          <option>Ch???n</option>
          {users.map((user) => (
            <option key={user._id}>{user.hovaten}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Ng??y b???t ?????u</Form.Label>
            <Form.Control
              value={ngaybd}
              name="ngaybd"
              type="date"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Ng??y k???t th??c</Form.Label>
            <Form.Control
              value={ngaykt}
              name="ngaykt"
              type="date"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Kinh ph?? th???c hi???n</Form.Label>
        <Form.Control
          value={kinhphi}
          name="kinhphi"
          type="number"
          onChange={onChangeUpdated}
          aria-label="Default select example"
        ></Form.Control>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>L??nh v???c nghi??n c???u</Form.Label>
            <Form.Select
              value={linhvuc}
              name="linhvuc"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            >
              <option>Ch???n l??nh v???c nghi??n c???u</option>
              {linhvucs.map((linhvuc) => (
                <option key={linhvuc._id}>{linhvuc.ten}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Khoa x??t duy???t ????? t??i</Form.Label>
            <Form.Select
              value={khoaxetduyet}
              name="khoaxetduyet"
              onChange={onChangeUpdated}
              aria-label="Default select example"
            >
              <option>Ch???n khoa x??t duy???t ????? t??i</option>
              {khoas.map((khoa) => (
                <option key={khoa._id}>{khoa.ten}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>M???c ti??u</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="muctieu"
          aria-describedby="title-help"
          value={muctieu}
          onChange={onChangeUpdated}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>T??m t???t n???i dung nghi??n c???u</Form.Label>
        <Form.Control
          as="textarea"
          rows={15}
          name="noidung"
          aria-describedby="title-help"
          value={noidung}
          onChange={onChangeUpdated}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>K???t qu??? d??? ki???n</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="ketquadukien"
          aria-describedby="title-help"
          value={ketquadukien}
          onChange={onChangeUpdated}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ghi ch??</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="ghichu"
          aria-describedby="title-help"
          value={ghichu}
          onChange={onChangeUpdated}
        />
      </Form.Group>
      <div>
        <h1>DANH S??CH TH??NH VI??N THAM GIA </h1>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>H??? v?? t??n</Form.Label>
              <Form.Select
                name="user1"
                aria-describedby="title-help"
                value={thanhvienthamgia.hovaten}
                onChange={onChangeUser}
              >
                <option>Ch???n th??nh vi??n</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id} name={user.hovaten}>
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
              <Form.Label>Vai tr??</Form.Label>
              <Form.Select
                name="vaitrothamgia1"
                aria-describedby="title-help"
                value={thanhvienthamgia.vaitrothamgia}
                onChange={onChangeVaiTroThamGia}
              >
                <option value="">Ch???n vai tr??</option>
                {vaitroTGs.map((vaitroTG) => (
                  <option
                    key={vaitroTG._id}
                    value={vaitroTG._id}
                    name={vaitroTG.ten}
                  >
                    {vaitroTG.ten}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>????n v???</Form.Label>
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
              <Form.Label>H??? v?? t??n</Form.Label>
              <Form.Select
                name="user2"
                aria-describedby="title-help"
                value={thanhvienthamgia.hovaten}
                onChange={onChangeUser}
              >
                <option>Ch???n th??nh vi??n</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id} name={user.hovaten}>
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
              <Form.Label>Vai tr??</Form.Label>
              <Form.Select
                name="vaitrothamgia2"
                aria-describedby="title-help"
                value={thanhvienthamgia.vaitrothamgia}
                onChange={onChangeVaiTroThamGia}
              >
                <option value="">Ch???n vai tr??</option>
                {vaitroTGs.map((vaitroTG) => (
                  <option
                    key={vaitroTG._id}
                    value={vaitroTG._id}
                    name={vaitroTG.ten}
                  >
                    {vaitroTG.ten}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>????n v???</Form.Label>
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
      </div>
      <div>
        <h1>?????I T??C NCKH</h1>
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>STT</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                T??n ????n v???
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                H??? v?? t??n ?????i di???n
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                N???i dung ph???i h???p
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Kinh ph?? h??? tr???
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Ch???c n??ng
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>????nh k??m</Form.Label>
        <Form.Control
          type="file"
          name="dinhkem"
          aria-describedby="title-help"
          value={dinhkem}
          onChange={onChangeUpdated}
        />
      </Form.Group>
    </Form>
  );
};

export default ThongTinDeTai;
