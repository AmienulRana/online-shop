import React from "react";
import Navigasi from "../Navbar";
import Footer from "../Footer";
import collections from "../data/dataShirt.js";
import { Container, Row, Col, Button } from "reactstrap";

import { useParams } from "react-router-dom";
const CategoryJacket = () => {
  const { nama } = useParams();
  return (
    <React.Fragment>
      <Navigasi />
      <Container className="big-container">
        <Row className="mt-4 justify-content-between">
          {collections
            .filter((el) => el.kategori === nama)
            .map((el, id) => {
              return (
                <Col className="col-10 col-md-3 col-img-sale" key={id}>
                  <img src={el.src} className="img-fluid img-sale" />
                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold name-collection">{el.nama}</h5>
                      <p style={{ color: "red" }} className="harga fw-bold">
                        ${el.harga}
                      </p>
                    </div>
                    <hr style={{ transform: "translateY(-25px)" }} />
                    <div className="buttons-buy d-flex justify-content-between">
                      <Button
                        color="warning badge"
                        className=""
                        style={{ height: "max-content", color: "white" }}
                      >
                        Buy
                      </Button>{" "}
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
export default CategoryJacket;
