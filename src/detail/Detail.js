import React from "react";
import Navbar from "../Navbar";
import "./Detail.css";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import Footer from "../Footer";
import jacket from "../img/jacket.jpg";

const Detail = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="big-container">
        <Row>
          <Col className="col-md-6 col-10 detail-baju">
            <img src={jacket} className="img-detail" />
            <div className="d-flex justify-content-center mt-2">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </Col>
          <Col className="col-lg-4 col-md-6 col-10 basic-shirt p-0">
            <h4 className="text-center fw-bold mt-2">Basic Shirt</h4>
            <div className="div-color mt-4">
              <h5 className="fw-bold">Color</h5>
              <div className="d-flex">
                <div
                  className="color choise-color"
                  style={{ background: "red" }}
                ></div>
                <div className="color" style={{ background: "black" }}></div>
                <div className="color" style={{ background: "grey" }}></div>
              </div>
            </div>
            <div className="div-size mt-4">
              <h5 className="fw-bold">Size</h5>
              <div className="d-flex">
                <div className="size">XL</div>
                <div className="size choise-size">L</div>
                <div className="size">M</div>
              </div>
            </div>
            <div className="div-qty mt-4">
              <h6 className="fw-bold">Qty</h6>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <button className="plus-minus">-</button>
                  <p className="qty mx-3">1</p>
                  <button className="plus-minus">+</button>
                </div>
                <p className="total-harga-qty">$22</p>
              </div>
              <div className="d-flex justify-content-between">
                <button className="beli">Beli</button>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Detail;
