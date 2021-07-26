import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import logoLogin from "../img/logo-login-register/logo-login.png";
import "./login.css";
const Login = () => {
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
          <div className="m-auto">
            <div className="input-data">
              <input type="text" required className="input-login-password" />
              <label>Username</label>
              <span className="underline"></span>
            </div>
            <div className="input-data">
              <input
                type="password"
                required
                className="input-login-password"
              />
              <label>Password</label>
              <span className="underline"></span>
            </div>
            <div class="form-check justify-content-between d-flex">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me?
                </label>
              </div>
              <div className="align-self-center fw-bold">
                <p style={{ fontSize: 14 + "px" }}>Forgot Password?</p>
              </div>
            </div>
            <Button className="rounded-pill login btn-part-login">
              Sign In
            </Button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
