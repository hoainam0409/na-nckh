import React from "react";
import SideBar from "../../sidebar/SideBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from 'react-bootstrap/Figure'
import noImage from '../../../assets/images/layout/no-image.jpg'

const Thongtincanhan = () => {
  return (
    <div>
      <SideBar />
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <h1
          style={{
            fontSize: "24px",
          }}
        >
          Thông tin cá nhân
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px" }}>
            <div>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={noImage}
                />
                <Figure.Caption>
                  Chọn ảnh
                </Figure.Caption>
              </Figure>
            </div>
          </div>
          <Form style={{ width: "100%" }}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Mã giảng viên</Form.Label>
                  <Form.Control
                    type="text"
                    name="magiangvien"
                    disabled
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control
                    type="text"
                    name="hovaten"
                    required
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Giới tính</Form.Label>
                  <Form.Control
                    type="text"
                    name="gioitinh"
                    required
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày sinh</Form.Label>
                  <Form.Control
                    type="date"
                    name="ngaysinh"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
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
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    aria-describedby="title-help"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
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
            </Row>
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
            </Form.Group>
            <Button variant="primary" type="submit">
              Lưu
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Thongtincanhan;
