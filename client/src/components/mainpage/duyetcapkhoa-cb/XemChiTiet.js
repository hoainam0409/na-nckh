import React, { useState, useContext, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DeTai from "./DeTai";
import SanPham from "../duyetcapkhoa-cb/SanPham";
import { DeTaiCBContext } from "../../../contexts/DeTaiCBContext";
import ShowKQĐG from "../../../until/KQHDDG";
import TienDoThucHien from "../../../until/TienDoThucHien";

const XemDeTaiCB = () => {
  const [key, setKey] = useState("Thông tin đề tài");
  const {
    detaicbState: { detaicb },
    showXemDeTaiCB,
    setShowXemDeTaiCB,
  } = useContext(DeTaiCBContext);

  // State
  const [updatedDeTaiCB, setUpdatedDeTaiCB] = useState(detaicb);

  useEffect(() => setUpdatedDeTaiCB(detaicb), [detaicb]);

  const closeDialog = () => {
    setUpdatedDeTaiCB(detaicb);
    setShowXemDeTaiCB(false);
  };

  return (
    <Modal show={showXemDeTaiCB} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết đề tài</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Thông tin đề tài" title="Thông tin đề tài">
            <DeTai />
          </Tab>
          <Tab eventKey="Sản phẩm và ứng dụng" title="Sản phẩm và ứng dụng">
            <SanPham />
          </Tab>
          <Tab eventKey="Hội đồng xét duyệt" title="Hội đồng xét duyệt">
            {/* /> */}
          </Tab>
          <Tab eventKey="Hội đồng đánh giá" title="Hội đồng đánh giá">
            <ShowKQĐG />
          </Tab>
          <Tab eventKey="Tiến độ thực hiện" title="Tiến độ thực hiện">
            <TienDoThucHien />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default XemDeTaiCB;
