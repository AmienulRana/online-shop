import React from "react";
import shirt from "../img/shirt.jpg";
import jacket from "../img/jacket.jpg";
import tShirt from "../img/tShirt.jpg";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const thumbCollection = [
  { nama: "Jacket", src: jacket, kategori: "jacket", href: "/category/jacket" },
  { nama: "Kemeja", src: shirt, kategori: "Kemeja", href: "/category/kemeja" },
  {
    nama: "t-shirt",
    src: tShirt,
    kategori: "t-shirt",
    href: "/category/kaos",
  },
];
const Collection = () => {
  return (
    <div className="container big-container container-collection -5">
      <div className="title-collection">
        <h4 className="fw-bold">Shopping by Collection </h4>
        <hr />
      </div>
      <Row className="mt-4 justify-content-between">
        {thumbCollection.map((collection, id) => {
          return (
            <Col className="col-10 col-md-3 col-img-sale" key={id}>
              <Link to={collection.href}>
                <img src={collection.src} className="img-fluid img-sale" />
              </Link>
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <div>
                  <h5 className="fw-bold name-collection">{collection.nama}</h5>
                  <p
                    style={{
                      opacity: 0.6,
                      lineHeight: 5 + "px",
                    }}
                    className="view-produk"
                  >
                    View Produk
                  </p>
                </div>
                <ion-icon
                  name="arrow-forward"
                  style={{ fontSize: 23 + "px" }}
                ></ion-icon>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Collection;
