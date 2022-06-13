import React, { useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import ChiTietThongBao from "./ChiTietThongBao";

function Thongbaochungs() {
  const state = useContext(GlobalState);
  const [thongbaochungs] = state.thongbaochungsAPI.thongbaochungs;
  const [thongbaochung, setThongbaochung] = useState("");
  const [callback, setCallback] = state.thongbaochungsAPI.callback;
  const [id, setID] = useState("");
  const [onEdit, setOnEdit] = useState(false);

  const [chitiet, setChiTiet] = useState(false);
  const showChiTiet = () => setChiTiet(chitiet);
  const hiddenChiTiet = () => setChiTiet(!chitiet);

  const createThongbaochung = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(`/thongbao/thongbaochung/${id}`, {
          name: thongbaochung,
        });
        alert(res.data.msg);
      } else {
        const res = await axios.post("/thongbao/thongbaochung", {
          name: thongbaochung,
        });
        alert(res.data.msg);
      }
      setOnEdit(false);
      setThongbaochung("");
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const editThongbaochung = async (id, name) => {
    setID(id);
    setThongbaochung(name);
    setOnEdit(true);
  };

  const deleteThongbaochung = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/thongbao/thongbaochung/${id}`
      );
      alert(res.data.msg);
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div style={{ margin: "10px 20px 20px 330px" }}>
      <h1
        style={{
          fontSize: "20px",
        }}
      >
        Danh sách thông báo
      </h1>
      <Button
        style={{ marginTop: "70px", marginBottom: "20px" }}
        variant="primary"
      >
        Thêm mới
      </Button>
      <Table borderless bordered hover style={{ cursor: "pointer" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Tiêu đề</th>
            <th style={{ textAlign: "center" }}>Ngày thông báo</th>
            <th style={{ textAlign: "center" }}>Người thông báo</th>
            <th style={{ textAlign: "center" }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {thongbaochungs.map((thongbaochung) => (
            <tr key={thongbaochung._id}>
              <td>{thongbaochung.tieude}</td>
              <td>{thongbaochung.ngaythongbao}</td>
              <td>{thongbaochung.nguoithongbao}</td>
              <td style={{ textAlign: "center" }}>
                <Button onClick={() => setChiTiet(true)} variant="primary">
                  Xem
                </Button>
                <Button variant="info">Sửa</Button>
                <Button variant="danger">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ChiTietThongBao
        trigger={chitiet}
        setTrigger={setChiTiet}
      ></ChiTietThongBao>
    </div>
  );
}

export default Thongbaochungs;
