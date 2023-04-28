import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import logo from "../media/login-logo.png";

const ForgotPasswordPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <div>
          <img className="login-logo" alt="logo" src={logo}></img>
          <div className="login-title">Forgot Password?</div>
        </div>
        <div className="instruction mt-3">
          <p>
            Please input your email address and an email will be sent to you
            with a new password.
          </p>
          <p>Please allow a few minutes for the delivery.</p>
          <p>
            If you do not receive the email, please be sure to whitelist the
            address
            <span className="support-email"> no-reply@messagewatcher.com</span>
          </p>
          <p>
            Also, note that if you request a new password more than once, only
            the last request is valid.
          </p>
          <p>
            For any additional questions please contact us at
            <span className="support-email"> support@messagewatcher.com</span>
          </p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="text-start">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
            <div>
              <button disabled={!email} type="submit" className="login-btn">
                Send New Password
              </button>
            </div>
          </form>
          <LoginModal
            content="An invalid email address was entered, please also verify that you are using the correct portal URL address for your company."
            show={showModal}
            handleClose={handleCloseModal}
          />
        </div>
        <div className="mt-4">
          <a className="forgot-pass" href="/login">
            <div>Go Back</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
