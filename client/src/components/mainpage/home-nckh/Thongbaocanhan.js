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
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Thongbaocanhan;
