import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import SideBar from "../../sidebar/SideBar";
import ReactTooltip from "react-tooltip";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BsFillEyeFill,
  BsPencilSquare,
  BsTrashFill,
  BsFileEarmarkWord,
  BsFileEarmarkZip,
} from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToolBar from "../../../until/ToolBar";

const DanhSachBieuMau = () => {
  return (
    <div>
      <SideBar />
      <div className="style-mainpage">
        <div>
          <h1>Danh sách biểu mẫu</h1>
        </div>
        <Button
          style={{
            backgroundColor: "#337AB7",
            borderColor: "#2d6da3",
          }}
        >
          Thêm mới
        </Button>
        <div>
          <ToolBar />
          <Table borderless bordered hover style={{ cursor: "pointer" }}>
            <thead>
              <tr className="table-header">
                <th>Tên biểu mẫu</th>
                <th>Mã</th>
                <th>Mô tả</th>
                <th>Entity</th>
                <th className="chucnang">Chức năng</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DanhSachBieuMau;
