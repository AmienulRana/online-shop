import React from "react";
import Navigasi from "../Navbar";
import Footer from "../Footer";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import AddToCart from "../fungsi/AddToCart";
import products from "../data/dataShirt";
const Categories = () => {
  return (
    <React.Fragment>
      <Navigasi />
      <Container className="big-container">
        <Row className=" mt-4 justify-content-between">
          {products.map((product, id) => {
            return (
              <Col className="col-10 col-md-3 col-img-sale " key={id}>
                <Link
                  to={{
                    pathname: "detail/" + product.id,
                  }}
                >
                  <img src={product.src} className="img-fluid img-sale" />
                </Link>
                <div className="mt-3">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold name-collection">{product.nama}</h5>
                    <p style={{ color: "red" }} className="harga fw-bold">
                      ${product.harga}
                    </p>
                  </div>
                  <hr style={{ transform: "translateY(-25px)" }} />
                  <div className="buttons-buy d-flex justify-content-between">
                    <Link to={"/detail/" + product.id}>
                      <Button
                        color="warning badge"
                        className=""
                        style={{ height: "max-content", color: "white" }}
                      >
                        Buy
                      </Button>{" "}
                    </Link>
                    <ion-icon
                      name="cart"
                      style={{ fontSize: 24 + "px" }}
                    ></ion-icon>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Categories;
