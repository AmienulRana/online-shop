import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import blackShirt from "../img/product/black-shirt.png";
import kemeja from "../img/product/kemeja.png";
import jacketCoklat from "../img/product/jacket-Coklat.jpg";

const products = [
  { nama: "Black t-shirt", src: blackShirt, kategori: "shirt", harga: 15 },
  { nama: "Kemeja", src: kemeja, kategori: "kemeja", harga: 22 },
  { nama: "Jacket coklat", src: jacketCoklat, kategori: "jacket", harga: 20 },
];
const HomeProduct = () => {
  return (
    <Container className="big-container">
      <div className="title-collection">
        <h4 className="fw-bold">Other Product</h4>
        <hr style={{ width: 50 + "% !important" }} />
      </div>
      <Row className=" mt-4 justify-content-between">
        {products.map((product, id) => {
          return (
            <Col className="col-10 col-md-3 col-img-sale" key={id}>
              <img src={product.src} className="img-fluid img-sale" />
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold name-collection">{product.nama}</h5>
                  <p style={{ color: "red" }} className="harga fw-bold">
                    ${product.harga}
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
  );
};

export default HomeProduct;
