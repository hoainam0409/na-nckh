import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Thongbaocanhan = () => {
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <h1
          style={{
            textTransform: "uppercase",
            color: "#337ab7",
            fontSize: "20px",
          }}
        >
          Thông báo nhắc việc
        </h1>
        <Table hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thông báo đăng ký đề tài sinh viên cấp trường năm 2022</td>
              <td>
                <Button variant="primary">Xem chi tiết</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Thông báo đăng ký đề tài sinh viên cấp trường năm 2022</td>
              <td>
                <Button variant="primary">Xem chi tiết</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Thông báo đăng ký đề tài sinh viên cấp trường năm 2022</td>
              <td>
                <Button variant="primary">Xem chi tiết</Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Thông báo đăng ký đề tài sinh viên cấp trường năm 2022</td>
              <td>
                <Button variant="primary">Xem chi tiết</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Thongbaocanhan;
