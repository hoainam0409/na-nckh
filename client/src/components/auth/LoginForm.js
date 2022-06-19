import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiCheckbox } from "react-icons/bi";
// import Logo from "../../assets/images/logo/LOGO-GTVT-Trans2.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";


const LoginForm = () => {
  //constext
  const { loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	});
  const [alert, setAlert] = useState(null)
  const { username, password } = loginForm

  const onChangeInput = event =>
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

  const loginSubmit = async event => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm)
			if (!loginData.success) {
				setAlert({ type: 'danger', message: loginData.message })
				setTimeout(() => setAlert(null), 5000)
      // if (loginData.success) {
      //   window.location.href = "/nckh/dashboard";
      // }
      // else{
      // 	setAlert({ type: 'danger', message: loginData.message })
      // 	setTimeout(() => setAlert(null), 5000)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="my-4" onSubmit={loginSubmit}>
      <AlertMessage info = {alert}/>
      <Form.Group style={{ marginBottom: "20px" }}>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          required
          value={username}
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
          value={password}
          onChange={onChangeInput}
        />
      </Form.Group>
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
            <span className="form-check-description">Ghi nhớ đăng nhập</span>
          </label>
        </div>
        <div className="remr">
          <Link to="">Quên mật khẩu?</Link>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "#2c88dd",
          width: "100%",
          marginTop: "40px",
          fontSize: "18px",
        }}
        type="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
}

export default LoginForm;
