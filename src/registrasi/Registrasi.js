import React from "react";
import { Button } from "reactstrap";
import logoLogin from "../img/logo-login-register/logo-login.png";
import "../login/login.css";
const Registrasi = () => {
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
              Sign Up to Countinue
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
            <div className="input-data">
              <input type="email" required className="input-login-password" />
              <label>Email</label>
              <span className="underline"></span>
            </div>
            <Button className="rounded-pill login btn-part-login">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
