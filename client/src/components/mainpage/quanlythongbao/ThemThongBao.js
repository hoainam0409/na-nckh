import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../../contexts/constant";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'




const initialState = {
  _id: "",
  tieude: "",
  nguoithongbao: "",
  ngaythongbao: "",
  noidung: "",
  dinhkem: "",
};

function ThemThongBao(props) {
  const state = useContext(GlobalState);
  const [thongbaochung, setThongbaochung] = useState(initialState);

  // const navigate = useNavigate();
  const param = useParams();
  const [token] = state.token


  const [thongbaochungs] = state.thongbaochungsAPI.thongbaochungs;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.thongbaochungsAPI.callback;

  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      thongbaochungs.forEach((thongbaochung) => {
        if (thongbaochung._id === param.id) {
          setThongbaochung(thongbaochung);
        }
      });
    } else {
      setOnEdit(false);
      setThongbaochung(initialState);
    }
  }, [param.id, thongbaochungs]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setThongbaochung({ ...thongbaochung, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if(!isAdmin) return alert("You're not an admin")
      // if(!images) return alert("No Image Upload")

      if (onEdit) {
        await axios.put(
          `${apiUrl}/thongbao/thongbaochung/${thongbaochung._id}`
        );
      } else {
        await axios.post(`${apiUrl}/thongbao/thongbaochung`, {...thongbaochung}, {
          headers: {Authorization: token}
      })
      }
      setCallback(!callback);
      // navigate.push("/"); 
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return props.trigger ? (
    <div
      style={{
        border: "1px solid #dddddd",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "100%",
          backgroundColor: "#337AB7",
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
      <Form style={{ margin: "20px" }} onSubmit = {handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control type="text" name="tieude" onChange={handleChangeInput}/>
        </Form.Group>
        <div>
          <Form.Group className="mb-3" >
            <Form.Label>Người thông báo</Form.Label>
            <Form.Control type="text" name="nguoithongbao" onChange={handleChangeInput} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Ngày thông báo</Form.Label>
            <Form.Control type="text" name="ngaythongbao" onChange={handleChangeInput} />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" >
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={3} name = "noidung" onChange={handleChangeInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>File đính kèm</Form.Label>
          <Form.Control type="file" name="dinhkem" onChange={handleChangeInput} />
        </Form.Group>
      </Form>
      <div
        style={{
          height: "60px",
          marginRight: "20px",
          justifyContent: "center",
        }}
      >
        <div style={{ float: "right" }} aria-label="Basic example">
          <Button style={{ margin: " 0 5px 0 5px" }} variant="outline-primary" type= 'submit'>
            Lưu
          </Button>
          <Button
            style={{ margin: " 0 5px 0 5px" }}
            variant="outline-dark"
            onClick={() => props.setTrigger(false)}
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ThemThongBao;
