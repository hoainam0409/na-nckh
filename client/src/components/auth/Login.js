import React, { useContext, useState } from "react";
import "./login.css";
import { Link} from "react-router-dom";
import { BiCheckbox } from "react-icons/bi";
import Logo from "../../assets/images/logo/LOGO-GTVT-Trans2.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/authContext";


function Login() {
  //constext
  const {loginUser} = useContext(AuthContext)
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const loginSubmit = async event => {
		event.preventDefault()

		try {
			const loginData = await loginUser(loginForm)
      console.log(loginData)
      if(loginData.success){
        window.location.href =    ('/nckh/dashboard')

      }
			// if (!loginData.success) {
			// 	setAlert({ type: 'danger', message: loginData.message })
			// 	setTimeout(() => setAlert(null), 5000)
			// }
		} catch (error) {
			console.log(error)
		}
	};
  return (
    <div className="login">
      <div className="login-page">
        <div className="content">
          <div className="row">
            <div className="content-left">
              <div className="bxinfo">
                <h1 className="titu">TRƯỜNG ĐẠI HỌC THÔNG MINH</h1>
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
                      TRƯỜNG ĐẠI HỌC THÔNG MINH
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
                      value={loginForm.username}
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
                      value={loginForm.password}
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
