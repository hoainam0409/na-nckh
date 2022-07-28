import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useContext} from "react";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import { BsCloudUploadFill } from 'react-icons/bs'

const CapNhatThuyetMinh = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    showCapNhatThuyetMinh,
    setShowCapNhatThuyetMinh,
  } = useContext(DeTaiCBContext);

  return (
    <Modal show={showCapNhatThuyetMinh} onHide={() => setShowCapNhatThuyetMinh(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật thuyết minh đề tài</Modal.Title>
      </Modal.Header>
      <Form >
        <Modal.Body>
          <h1 >Cập nhật thuyết minh đề tài "{detaicb.tendetai}"</h1>
          <div>
            <div style={{ float: 'left' }}>Danh sách tài liệu</div>
            <Button style={{ float: 'right' }}><BsCloudUploadFill /></Button>
          </div>
          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr className="table-header">
                <th>STT</th>
                <th>Tên tài liệu</th>
                <th>Kích thước</th>
                <th>Ngày tạo</th>
                <th>Phiên bản</th>
                <th className="chucnang">Chức năng</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Cập nhật
          </Button>
          <Button variant="secondary" onClick={() => setShowCapNhatThuyetMinh(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CapNhatThuyetMinh;
