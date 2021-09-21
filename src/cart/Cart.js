import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "reactstrap";
import blackShirt from "../img/product/black-shirt.png";
import AddToCart from "../fungsi/AddToCart";
import { Redirect } from "react-router-dom";
import "./cart.css";
import Authorized from "../Authorized";
import axios from "axios";
const api = "http://localhost:4000/";
const Cart = () => {
  // const authorized = useContext(Authorized);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get(api + "orders").then((response) => setCarts(response.data.data));
  }, []);

  // hanya orang yg sudah login yg boleh masuk ke halaman cart
  const AccessToken = localStorage.getItem("aToken");
  if (AccessToken === null) {
    return <Redirect to="/login" />;
  }
  const total_harga = carts.reduce((total, cart) => {
    return total + cart.harga;
  }, 0);
  return (
    <React.Fragment>
      <Navbar />
      <Container className="big-container">
        <Row className="justify-content-evenly">
          <Col className="col-lg-4 col-md-4 col-orderan col-9">
            <h5>Your Order</h5>
            <hr />
            {carts.map((cart) => {
              return (
                <div className="row mb-4" key={cart.id}>
                  <Col className="col-3">
                    <img
                      src={api + "image/" + cart.gambar}
                      className="img-cover img-fluid"
                    />
                  </Col>
                  <Col className="col-8">
                    <h6 className="fw-bold">{cart.nama_product}</h6>
                    {/*<p>Size : {cart.size}</p>*/}
                    {/*<p>Color : Black</p> */}
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <button className="plus-minus">-</button>
                        <p className="qty mx-3">{cart.qty}</p>
                        <button className="plus-minus">+</button>
                      </div>
                      <p className="total-harga-qty" style={{ color: "red" }}>
                        Rp.{cart.harga * cart.qty}
                      </p>
                    </div>
                  </Col>
                </div>
              );
            })}
            <hr />
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">total harga :</h6>
              <h6 className="fw-bold" style={{ color: "red" }}>
                Rp.{total_harga}
              </h6>
            </div>
          </Col>
          <Col className="col-lg-5 col-md-6 col-addres col-10">
            <div className="addres">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="fw-bold">Addres</h4>
                <button>Change</button>
              </div>
              <p className="mt-3">
                455 N. Rexford Drive Beverly Hills CA 90210, United States
              </p>
            </div>
            <div className="payment">
              <div className="d-flex align-items-center">
                <span className="active mr-3 metode-payment"></span>
                <div className="d-flex  align-items-center">
                  <ion-icon name="card" className="payment"></ion-icon>
                  <span className="fw-bold">Debit / Credit cart</span>
                </div>
              </div>
              <div className="id_payment justify-content-between align-items-center mt-4 d-flex">
                <div className="col-7 col-sm-8">
                  <span className="fw-bold" style={{ fontSize: 13 + "px" }}>
                    Your Card Number
                  </span>
                  <input className="id_payment" type="text" />
                </div>
                <button
                  className="fw-bold text-white bg-dark"
                  style={{
                    height: 40 + "px",
                    width: 120 + "px",
                    borderRadius: 10 + "px",
                  }}
                >
                  Pay
                </button>
              </div>
              <div className="d-flex align-items-center">
                <span className="mr-3 metode-payment"></span>
                <div className="d-flex  align-items-center">
                  <ion-icon name="cash"></ion-icon>
                  <span className="fw-bold">Cod / Cash</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cart;
