import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ThongbaochungContext } from "../../../contexts/ThongbaochungContext";
import SuaThongBao from "../quanlythongbao/SuaThongBao";
import ReactTooltip from "react-tooltip";
import { BsFillEyeFill} from "react-icons/bs";
import ToolBar from "../../../until/ToolBar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Thongbaochungs = () => {
  const {
    thongbaochungState: {
      thongbaochung,
      thongbaochungs,
      thongbaochungsLoading,
    },
    getThongbaochungs,
    findThongBaoChung,
    setShowSuaThongBaoChung,
  } = useContext(ThongbaochungContext);

  // Start: Get all
  useEffect(() => {
    getThongbaochungs();
  }, []);

  const chooseThongBaoChung = (thongbaochungId) => {
    findThongBaoChung(thongbaochungId);
    setShowSuaThongBaoChung(true);
  };
  return (
    <div style={{ margin: "20px" }}>
      {thongbaochung !== null && <SuaThongBao />}
      <Row>
        <Col sm={4}><h1>Danh sách thông báo</h1></Col>
        <Col sm={8}>
        <div className="filter">
              <Row className="controls">
                <Col>
                <Form.Group>
                <Form.Control type="date">
                  </Form.Control>
                </Form.Group>
                  
                </Col>
                <Col>
                <Form.Group>
                <Form.Control type="date">
                  </Form.Control>
                </Form.Group>
                </Col>
                
              </Row>
            </div>
        </Col>
      </Row>
      <div>
        <ToolBar/>
      <Table
        borderless
        bordered
        hover
        style={{ cursor: "pointer"}}
      >
        <thead>
          <tr className="table-header">
            <th>Tiêu đề</th>
            <th>Ngày thông báo</th>
            <th>Người thông báo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {thongbaochungs.map((thongbaochung) => (
            <tr key={thongbaochung._id}>
              <td>{thongbaochung.tieude}</td>
              <td>
                {new Date(thongbaochung.ngaythongbao).toLocaleDateString(["ban", "id",])}
              </td>

              <td>{thongbaochung.nguoithongbao}</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  style={{
                    backgroundColor: "#337AB7",
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
      
    </div>
  );
};

export default Thongbaochungs;
