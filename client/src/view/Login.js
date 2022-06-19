import React, { useContext } from "react";
import LoginForm from "../components/auth/LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Navigate to="/nckh/dashboard" />;
  else
    body = (
      <>
        {<LoginForm />}
      </>
    );
  return (
    <div className="landing">
      <div className="form-login">
        <div className="logo">
          <img className="tn-logo-img" alt="" />
          <div className="tn-logo-text">
            <h1>TRƯỜNG ĐẠI HỌC THÔNG MINH</h1>
          </div>
        </div>
        {body}
      </div>
    </div>
  );
};

export default Login;
