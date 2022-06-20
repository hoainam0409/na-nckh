import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import SuaThongBao from "../quanlythongbao/SuaThongBao";



const Thongbaochungs = () => {

  const {
    thongbaochungState: { thongbaochung, thongbaochungs, thongbaochungsLoading },
    getThongbaochungs,
    findThongBaoChung,
    setShowSuaThongBaoChung,
  } = useContext(ThongbaochungContext);

  // Start: Get all
  useEffect(() => {getThongbaochungs()} , []);

  const chooseThongBaoChung = (thongbaochungId) => {
    findThongBaoChung(thongbaochungId);
    setShowSuaThongBaoChung(true);
  };
  return (
    <div>
      
        <h1
         style={{
          textTransform: "uppercase",
          color: "#337ab7",
          fontSize: "20px",
        }}
        >
          Danh sách thông báo
        </h1>
        {thongbaochung !== null && <SuaThongBao />}
        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Tiêu đề</th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Ngày thông báo
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Người thông báo
              </th>
              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {thongbaochungs.map((thongbaochung) => (
              <tr key={thongbaochung._id}>
                <td>{thongbaochung.tieude}</td>
                <td>{new Date(thongbaochung.ngaythongbao).toLocaleDateString(['ban', 'id'])}</td>

                <td>{thongbaochung.nguoithongbao}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseThongBaoChung.bind(this, thongbaochung._id)}
                  >
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
};

export default Thongbaochungs;
