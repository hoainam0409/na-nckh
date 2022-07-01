import React from "react";
import SideBar from "../../sidebar/SideBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from 'react-bootstrap/Figure'

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
          Thông tin tài khoản
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px" }}>
          <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src=""
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
                  <Form.Label>Họ và tên </Form.Label>
                  <Form.Control
                    type="text"
                    name="hovaten"
                    required
                    aria-describedby="title-help"
                  //   value={tieude}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label> Giới tính</Form.Label>
                  <Form.Control
                    type="text"
                    name="gioitinh"
                    required
                    aria-describedby="title-help"
                  //   value={tieude}
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
                  //   value={tieude}
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
                  //   value={nguoithongbao}
                  //   onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày sinh</Form.Label>
                  <Form.Control
                    type="date"
                    name="ngaysinh"
                  //   value={ngaythongbao}
                  //   onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Khóa</Form.Label>
                  <Form.Control
                    type="text"
                    name="khoa"
                    required
                    aria-describedby="title-help"
                  //   value={nguoithongbao}
                  //   onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Khoa/Viện</Form.Label>
                  <Form.Control
                    type="text"
                    name="khoavien"
                  //   value={ngaythongbao}
                  //   onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Lớp hành chính</Form.Label>
                  <Form.Control
                    type="text"
                    name="lophanhchinh"
                    required
                    aria-describedby="title-help"
                  //   value={nguoithongbao}
                  //   onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="noidung"
              //   value={noidung}
              //   onChange={onChangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="noidung"
              //   value={noidung}
              //   onChange={onChangeInput}
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
