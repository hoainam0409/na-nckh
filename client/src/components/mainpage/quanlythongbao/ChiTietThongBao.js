import React from "react";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function ChiTietThongBao(props) {
  return props.trigger ? (
    <div
      style={{
        // width: "50%",
        // height: "50%",
        border: "1px solid #dddddd",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "100%",
          backgroundColor: "#3192e1",
          borderButtom: "1px solid #9ec3e0",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            color: "white",
            fontWeight: "500",
            float: "left",
          }}
        >
          Chi tiết thông báo
        </h1>
        <CloseButton
          variant="white"
          onClick={() => props.setTrigger(false)}
          style={{ float: "right" }}
        />
        {props.children}
      </div>
      <Form style={{ margin: "20px" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Người thông báo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ngày thông báo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>File đính kèm</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Form>
      <div
        style={{
          height: "60px",
          marginRight: "20px",
          justifyContent: "center",
        }}
      >
        <ButtonGroup style={{ float: "right" }} aria-label="Basic example">
          <Button style={{ margin: " 0 5px 0 5px" }} variant="outline-primary">
            Lưu
          </Button>
          <Button
            style={{ margin: " 0 5px 0 5px" }}
            variant="outline-dark"
            onClick={() => props.setTrigger(false)}
          >
            Đóng
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ChiTietThongBao;
