import React, { useState, useContext } from "react";
import { Button } from "reactstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import logoLogin from "../img/logo-login-register/logo-login.png";
import axios from "axios";
import "./login.css";
import Authorized from "../Authorized";

const api = "http://localhost:4000/";
const Login = (props) => {
  const [error, setError] = useState({ error: "" });
  const [detail, setDetail] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const authorized = useContext(Authorized);
  let history = useHistory();
  const AccessToken = localStorage.getItem("aToken");
  if (AccessToken !== null) {
    history.push("/");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      url: api + "login",
      method: "post",
      data: {
        email: detail.email,
        password: detail.password,
      },
    }).then((res) => {
      if (res.data.error) {
        setMsg(res.data.message);
      } else {
        localStorage.setItem("aToken", res.data.AccessToken);
        Authorized(res);
        history.push("/");
      }
    });
  };
  return (
    <div className="d-flex">
      <div className="col-md-6 d-none part-logo d-md-block">
        <img className="logo" src={logoLogin} />
      </div>
      <div className="col-md-6 col-10 position-relative">
        <h4 className="brand-login">
          Your<span className="brand">Brand</span>
        </h4>
        <div className="form-login" style={{ width: 90 + "%" }}>
          <div style={{ width: "max-content", margin: "auto" }}>
            <h4 className="fw-bold text-center">Welcome.</h4>
            <p className="fw-bold text-muted text-center">
              Sign In to Countinue
            </p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="m-auto">
              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={(e) =>
                    setDetail({ ...detail, email: e.target.value })
                  }
                  value={detail.email}
                  className="input-login-password"
                />
                <label>Email</label>
                <span className="underline"></span>
              </div>
              <div className="input-data">
                <input
                  type="password"
                  required
                  onChange={(e) =>
                    setDetail({ ...detail, password: e.target.value })
                  }
                  value={detail.password}
                  className="input-login-password"
                />
                <label>Password</label>
                <span className="underline"></span>
              </div>
              <div className="error-email">
                {msg !== "" ? <p>*{msg}</p> : ""}
              </div>
              <div className="form-check justify-content-between d-flex">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me?
                  </label>
                </div>
                <div className="align-self-center fw-bold">
                  <p style={{ fontSize: 14 + "px" }}>Forgot Password?</p>
                </div>
              </div>
              <button className="rounded-pill login btn-part-login">
                Sign In
              </button>
              <p className="text-center mt-4">
                Don't Have Account?{" "}
                <Link to="/register">
                  <span
                    className="fw-bold"
                    style={{ color: "#ffc164", textDecoration: "none" }}
                  >
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
