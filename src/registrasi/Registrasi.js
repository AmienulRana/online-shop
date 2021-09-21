import React, { useState } from "react";
import logoLogin from "../img/logo-login-register/logo-login.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../login/login.css";
const api = "http://localhost:4000/";
const Registrasi = () => {
  const [users, setUsers] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const submitHandlerRegistrasi = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: api + "registrasi",
      data: {
        username: users.username,
        email: users.email,
        password: users.password,
      },
    }).then((res) => {
      if (res.data.error) {
        setMsg(res.data.message);
      } else {
        return history.push("/login");
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
              Sign Up to Countinue
            </p>
          </div>
          <form onSubmit={submitHandlerRegistrasi}>
            <div className="m-auto">
              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={(e) =>
                    setUsers({ ...users, username: e.target.value })
                  }
                  className="input-login-password"
                />
                <label>Username</label>
                <span className="underline"></span>
              </div>
              <div className="input-data">
                <input
                  type="password"
                  required
                  className="input-login-password"
                  onChange={(e) =>
                    setUsers({ ...users, password: e.target.value })
                  }
                />
                <label>Password</label>
                <span className="underline"></span>
              </div>
              <div className="input-data">
                <input
                  type="email"
                  required
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                  className="input-login-password"
                />
                <label>Email</label>
                <span className="underline"></span>
              </div>
              <div className="input-data validation-email">
                {msg !== "" ? <span>*{msg}</span> : ""}
              </div>
              <button type="submit" className="login btn-part-login">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
