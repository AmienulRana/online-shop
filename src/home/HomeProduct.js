import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import blackShirt from "../img/product/black-shirt.png";
import kemeja from "../img/product/kemeja.png";
import jacketCoklat from "../img/product/jacket-Coklat.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const api = "http://localhost:4000/";
const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(api + "products").then((res) => setProducts(res.data.data));
  }, []);
  console.log(products);
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
              <Link
                to={{
                  pathname: "detail/" + product._id,
                }}
              >
                <img
                  src={api + "images/" + product.photo}
                  className="img-fluid img-sale"
                  alt={product.nama_product}
                />
              </Link>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold name-collection">
                    {product.nama_product}
                  </h5>
                  <p style={{ color: "red" }} className="harga fw-bold">
                    Rp.{product.harga}
                  </p>
                </div>
                <hr style={{ transform: "translateY(-25px)" }} />
                <div className="buttons-buy d-flex justify-content-between">
                  <Link to={"detail/" + product._id}>
                    <Button
                      color="warning badge"
                      className=""
                      style={{ height: "max-content", color: "white" }}
                    >
                      Buy
                    </Button>
                  </Link>
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
