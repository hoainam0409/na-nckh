import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState, useEffect } from "react";
import { DeTaiSVContext } from "../../../contexts/DeTaiSVContext";
import { DotDangKyContext } from "../../../contexts/DotDangKyContext";
import {KhoaContext} from '../../../contexts/KhoaContext'
import {LinhVucContext} from '../../../contexts/LinhVucContext'
import {UserContext} from "../../../contexts/UserContext";


const SuaDeTaiSV = () => {
  // Contexts
  const {
    detaisvState: { detaisv },
    showSuaDeTaiSV,
    setShowSuaDeTaiSV,
    updateDeTaiSV,
    setShowToast,
  } = useContext(DeTaiSVContext);

  const {
    dotdangkyState: { dotdangkys },
    getDotDangKys
  } = useContext(DotDangKyContext);

  useEffect(() => {getDotDangKys()}, []);

  const {
    khoaState: {khoas},
    getKhoas
  } = useContext(KhoaContext)  

  useEffect(() => getKhoas(), [] )

  const {
    linhvucState: {linhvucs},
    getLinhVucs
  } = useContext(LinhVucContext)  

  useEffect(() => getLinhVucs(), [] )
  const {
    userState: {users},
    getUsers
  } = useContext(UserContext)  

  useEffect(() => getUsers(), [] )

  // State
  const [updatedDeTaiSV, setUpdatedDeTaiSV] = useState(detaisv);

  useEffect(() => setUpdatedDeTaiSV(detaisv), [detaisv]);

  const {
    madetai,
    tendetai,
    dotdangky,
    GVHD,
    khoaxetduyet,
    linhvucnc,
    noidungnc,
    muctieunc,
    ketquadukien,
    sinhvienthuchien,
    trangthai,
    dinhkem,
  } = updatedDeTaiSV;

  const onChangeUpdated = (event) =>
    setUpdatedDeTaiSV({
      ...updatedDeTaiSV,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedDeTaiSV(dotdangky);
    setShowSuaDeTaiSV(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateDeTaiSV(updatedDeTaiSV);
    setShowSuaDeTaiSV(false);
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showSuaDeTaiSV} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Ch???nh s???a ????? t??i</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>M?? ????? t??i</Form.Label>
            <Form.Control
              type="text"
              name="madetai"
              required
              aria-describedby="title-help"
              value={madetai}
              onChange={onChangeUpdated}
            />
          </Form.Group>
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
            <Form.Label>?????t ????ng k??</Form.Label>
            <Form.Select
              as="select"
              value={dotdangky}
              name="dotdangky"
              onChange={onChangeUpdated}
            >
               <option>Ch???n ?????t ????ng k?? ????? t??i</option>
              {dotdangkys.map((dotdangky) => (
                <option key={dotdangky._id} value={dotdangky._id}>{dotdangky.tendot}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gi???ng vi??n h?????ng d???n</Form.Label>
            <Form.Control
              as="select"
              value={GVHD}
              name="GVHD"
              onChange={onChangeUpdated}
            >
              <option value="M??? ????ng k??">M??? ????ng k??</option>
              <option value="Kh??a ????ng k??">Kh??a ????ng k??</option>
            </Form.Control>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>L??nh v???c nghi??n c???u</Form.Label>
                <Form.Select
                  type="select"
                  name="linhvucnc"
                  required
                  aria-describedby="title-help"
                  value={linhvucnc}
                  onChange={onChangeUpdated}
                >
                 <option>Ch???n l??nh v???c nghi??n c???u</option>
              {linhvucs.map((linhvuc) => (
                <option key={linhvuc._id} value={linhvuc._id}>{linhvuc.ten}</option>
              ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Khoa x??t duy???t ????? t??i</Form.Label>
                <Form.Select
                  type="text"
                  name="khoaxetduyet"
                  required
                  aria-describedby="title-help"
                  value={khoaxetduyet}
                  onChange={onChangeUpdated}
                >
                  <option>Ch???n khoa x??t duy???t ????? t??i</option>
              {khoas.map((khoa) => (
                <option key={khoa._id} value={khoa._id}>{khoa.ten}</option>
              ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>T??m t???t n???i dung nghi??n c???u</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="ghichu"
              aria-describedby="title-help"
              value={noidungnc}
              onChange={onChangeUpdated}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>M???c ti??u</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="muctieunc"
              aria-describedby="title-help"
              value={muctieunc}
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
            <Form.Label>Danh s??ch sinh vi??n th???c hi???n</Form.Label>
            <Form.Select
              as="select"
              value={sinhvienthuchien}
              name="sinhvienthuchien"
              onChange={onChangeUpdated}
            >
              <option value="M??? ????ng k??">M??? ????ng k??</option>
              <option value="Kh??a ????ng k??">Kh??a ????ng k??</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tr???ng th??i</Form.Label>
            <Form.Select
              as="select"
              value={trangthai}
              name="trangthai"
              onChange={onChangeUpdated}
            >
              <option value="M??? ????ng k??">M??? ????ng k??</option>
              <option value="Kh??a ????ng k??">Kh??a ????ng k??</option>
            </Form.Select>
          </Form.Group>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            L??u
          </Button>
          <Button variant="secondary" onClick={closeDialog}>
            ????ng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SuaDeTaiSV;
