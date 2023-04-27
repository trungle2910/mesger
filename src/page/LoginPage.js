import React from "react";
import logo from "../media/login-logo.png";
import fbLogo from "../media/facebook-logo.svg";
import miLogo from "../media/microsoft.svg";
import liLogo from "../media/linkedin.svg";
import LoginForm from "../components/LoginForm.js";
import LoginPopup from "../components/LoginPopup.js";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <img className="login-logo" alt="logo" src={logo}></img>
        <div className="login-title">
          A Single Dashboard for Your Messaging Compliance
        </div>
        <LoginPopup />

        <LoginForm />
        <div type="button" className="login-with-social-btn">
          <div className=" login-with with-fb">
            <img className="login-with-logo" alt="logo" src={fbLogo} />
            <p>Log in With Facebook</p>
          </div>
          <div type="button" className=" login-with with-mi">
            <img className="login-with-logo" alt="logo" src={miLogo} />
            <p>Sign in With Microsoft</p>
          </div>
          <div type="button" className=" login-with with-li">
            <img className="login-with-logo" alt="logo" src={liLogo} />
            <p>Sign in With LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
