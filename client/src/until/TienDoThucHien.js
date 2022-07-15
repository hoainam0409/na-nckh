import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/esm/Table";

const ShowKQĐG = () => {
  return (
    <Form>
      <Modal.Body>
        <Table borderless bordered hover>
          <thead>
            <tr className="table-header">
              <th>STT</th>
              <th>Đợt kiểm tra tiến độ</th>
              <th>Kinh phí được cấp</th>
              <th>Kinh phí đã chi</th>
              <th>Kinh phí đã quyết toán</th>
              <th>Kinh phí chưa quyết toán</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </Modal.Body>
    </Form>
  );
};

export default ShowKQĐG;
