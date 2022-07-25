import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useContext} from "react";
import { DeTaiCBContext } from "../contexts/DeTaiCBContext";

const History = () => {
  // Contexts
  const {
    detaicbState: { detaicb },
    showHistory,
    setShowHistory,
  } = useContext(DeTaiCBContext);

  return (
    <Modal show={showHistory} onHide={()=> setShowHistory(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Qúa trình xử lý</Modal.Title>
      </Modal.Header>
      <Form >
        <Modal.Body>
          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr className="table-header">
                <th>STT</th>
                <th>Người gửi</th>
                <th>Hành động</th>
                <th>Thời gian</th>
                <th>Người nhận</th>
                <th className="chucnang">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Thị Hoài Nam</td>
                <td>Đăng ký</td>
                <td>24/07/2022</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nguyễn Thị Hoài Nam</td>
                <td>Gửi Duyệt</td>
                <td>24/07/2022</td>
                <td>Đơn vị: Khoa Công nghệ thông tin và truyền thông</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShowHistory(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default History;
