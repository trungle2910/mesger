import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routeActions } from "../redux/actions/route.actions.js";
import LoginModal from "./LoginModal";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const [showPassword, setShowPassword] = useState(false);
  const [loginFrom, setLoginFrom] = useState({ username: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const messenger = useSelector((state) => state.auth.error);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setLoginFrom({ ...loginFrom, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login(loginFrom));
  };

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
    if (messenger) {
      setShowModal(true);
    }
  }, [messenger, dispatch, navigate, redirectTo]);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="text-start">
          <label>Username</label>
          <input
            type="text"
            className="form-input"
            name="username"
            value={loginFrom.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className=" d-flex flex-row align-items-center justify-content-between">
            <label>Password</label>
            <a className="forgot-pass" href="/forgot-password">
              <div>Forgot Password</div>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
              name="password"
              value={loginFrom.password}
              onChange={handleChange}
            />
            <div
              className="icon-showpass align-items-center "
              onClick={handleTogglePassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </div>
          </div>
        </div>

        <button
          disabled={!loginFrom.username || !loginFrom.password}
          type="submit"
          className="login-btn"
        >
          Sign In
        </button>
      </form>
      <LoginModal
        content={messenger}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default LoginForm;
