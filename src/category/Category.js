import React, { useState, useEffect } from "react";
import Navigasi from "../Navbar";
import Footer from "../Footer";
import collections from "../data/dataShirt.js";
import { Container, Row, Col, Button } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const api = "http://localhost:4000/";
const CategoryJacket = () => {
  const { nama } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(api + "products").then((res) => setProducts(res.data.data));
  }, []);
  console.log(products);
  return (
    <React.Fragment>
      <Navigasi />
      <Container className="big-container">
        <Row className="mt-4 justify-content-between">
          {products
            .filter((el) => el.kategori.toLowerCase() === nama)
            .map((el, id) => {
              return (
                <Col className="col-10 col-md-3 col-img-sale" key={id}>
                  <Link
                    to={{
                      pathname: "/detail/" + el._id,
                    }}
                  >
                    <img
                      src={api + "images/" + el.photo}
                      className="img-fluid img-sale"
                    />
                  </Link>
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
