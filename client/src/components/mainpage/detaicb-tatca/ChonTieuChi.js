import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext, useEffect } from "react";
import { KhoaContext } from '../../../contexts/KhoaContext'
import {BsDownload } from 'react-icons/bs'

function ChonTieuChi(props) {
  const {
    khoaState: { khoas },
    getKhoas,
  } = useContext(KhoaContext);

  useEffect(() => getKhoas(), []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Chọn tiêu chí</Modal.Title>
      </Modal.Header>
      <Form >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Chọn Khoa/Bộ môn</Form.Label>
            <Form.Select>
              <option>Chọn Khoa/Bộ môn</option>
              {khoas.map((khoa) => (
                <option key={khoa._id}>{khoa.ten}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chọn năm</Form.Label>
            <Form.Select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Cả trường" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            <span><BsDownload /></span>
            Xuất
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Đóng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ChonTieuChi;
