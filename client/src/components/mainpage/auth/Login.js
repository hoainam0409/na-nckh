import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiCheckbox } from "react-icons/bi";
import Logo from "../../../assets/images/logo/LOGO-GTVT-Trans2.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <div className="login-page">
        <div className="content">
          <div className="row">
            <div className="content-left">
              <div className="bxinfo">
                <h1 className="titu">TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h1>
                <div>Địa chỉ: </div>
                <div>
                  <span>Điện thoại: </span>
                  <span>Fax: </span>
                  <span>Điện thoại: </span>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="bxform">
                <div className="logo">
                  <div className="tn-logo">
                    <img className="tn-logo-img" src={Logo} alt="" />
                    <div className="tn-logo-text">
                      TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI
                    </div>
                  </div>
                </div>
                <Form className="my-4" onSubmit={loginSubmit}>
                  <Form.Group style={{ marginBottom: "20px" }}>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      value={user.username}
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      name="password"
                      required
                      autoComplete="on"
                      value={user.password}
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Đăng nhập
                  </Button>
                  <div className="formcheck">
                    <div className="reml">
                      <label className="form-check-label">
                        <BiCheckbox
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "white",
                          }}
                        />
                        <span className="form-check-description">
                          Ghi nhớ đăng nhập
                        </span>
                      </label>
                    </div>
                    <div className="remr">
                      <Link to="">Quên mật khẩu?</Link>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
