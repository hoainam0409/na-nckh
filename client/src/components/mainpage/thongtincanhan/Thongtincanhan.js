import React from "react";
import SideBar from "../../sidebar/SideBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from 'react-bootstrap/Figure'
import noImage from '../../../assets/images/layout/no-image.jpg'
import {BsFillCloudUploadFill} from 'react-icons/bs'

const Thongtincanhan = () => {
  return (
    <div>
      <SideBar />
      <div className='style-mainpage'>
        <h1>Thông tin cá nhân</h1>
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px" }}>
            <div>
              <Figure>
                <Figure.Image
                  width={280}
                  height={280}
                  src={noImage}
                />
                <Figure.Caption>
                  <span><BsFillCloudUploadFill/></span>
                  Chọn ảnh
                </Figure.Caption>
              </Figure>
            </div>
          </div>
          <Form style={{ width: "100%" }}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Họ</Form.Label>
                  <Form.Control
                    type="text"
                    name="ho"
                    required
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Tên</Form.Label>
                  <Form.Control
                    type="text"
                    name="ten"
                    required
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                  type="date"
                  name="ngaysinh"
                />
              </Form.Group>
            </Row>
            <Row>
              <Col style={{ display: 'flex' }}>
                <div>Giới tính</div>
                <div style={{ marginLeft: "20px" }}>
                  <Form.Check
                    inline
                    label="Nam"
                    name="group1"
                  />
                  <Form.Check
                    inline
                    label="Nữ"
                    name="group1"
                  />
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  name="sdt"
                  required
                  aria-describedby="title-help"
                />
              </Form.Group>
            </Col>
          </Form>
        </div>
        <div>
          {/* <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Chức danh công tác</Form.Label>
                <Form.Control
                  type="text"
                  name="chucdanhct"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Chức danh khoa học</Form.Label>
                <Form.Control
                  type="text"
                  name="chucdanhkh"
                  required
                  aria-describedby="title-help"
                />
              </Form.Group>
            </Col>
          </Row> */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Địa chỉ nhà riêng</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="diachi"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Đơn vị công tác</Form.Label>
                <Form.Select
                  type="text"
                  name="donvict"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Địa chỉ cơ quan</Form.Label>
                <Form.Control
                  type="text"
                  name="diachicq"
                  required
                  aria-describedby="title-help"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="noidung"
            />
          </Form.Group></div>
        <div style={{float:"right"}}>
          <Button variant="primary" type="submit">
            Lưu
          </Button>
          <Button variant="secondary" type="submit">
            Đổi mật khẩu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thongtincanhan;
