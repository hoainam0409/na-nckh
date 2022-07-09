import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import SuaThongBao from "../quanlythongbao/SuaThongBao";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Thongbaochungs = () => {

  const {
    thongbaochungState: { thongbaochung, thongbaochungs, thongbaochungsLoading },
    getThongbaochungs,
    findThongBaoChung,
    setShowSuaThongBaoChung,
  } = useContext(ThongbaochungContext);

  // Start: Get all
  useEffect(() => { getThongbaochungs() }, []);

  const chooseThongBaoChung = (thongbaochungId) => {
    findThongBaoChung(thongbaochungId);
    setShowSuaThongBaoChung(true);
  };
  return (
    <div style={{ margin: '20px' }}>
      <h1
        style={{
          fontSize: "24px",
        }}
      >
        Danh sách thông báo
      </h1>
      {thongbaochung !== null && <SuaThongBao />}
      <Table borderless bordered hover style={{ cursor: "pointer", marginTop: "70px", }}>
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
                    backgroundColor: "#337AB7"
                  }}
                  onClick={chooseThongBaoChung.bind(this, thongbaochung._id)}
                  data-tip
                  data-for="Xem"
                >
                  <ReactTooltip id="Xem" place="top" effect="solid">
                    Xem
                  </ReactTooltip>
                  <BsFillEyeFill />
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
