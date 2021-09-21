import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./Detail.css";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import Footer from "../Footer";
import jacket from "../img/jacket.jpg";
import { useParams, Link, Redirect } from "react-router-dom";
import AddToCart from "../fungsi/AddToCart";
import Authorized from "../Authorized";
import axios from "axios";

const Add = (data) => {
  AddToCart(data);
};
const api = "http://localhost:4000/";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // console.log(data);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    axios.get(api + "detail/" + id).then((res) => {
      setData(res.data.data);
    });
  }, []);

  const addQty = () => {
    setQty(qty + 1);
  };
  const minQty = () => {
    if (qty < 1) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  // hanya orang yg sudah login yg boleh masuk ke halaman detail
  const AccessToken = localStorage.getItem("aToken");
  if (AccessToken === null) {
    return <Redirect to="/login" />;
  }
  return (
    <React.Fragment>
      <Navbar />
      <Container className="big-container">
        <Row>
          <Col className="col-md-6 col-10 detail-baju">
            <img src={api + "images/" + data.photo} className="img-detail" />
            <div className="d-flex justify-content-center mt-2">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </Col>
          <Col className="col-lg-4 col-md-6 col-10 basic-shirt p-0">
            <h4 className="text-center fw-bold mt-2">Basic Shirt</h4>
            <div className="desc">
              <h6 className="fw-bold">Desc :</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="div-qty mt-4">
              <h6 className="fw-bold">Qty</h6>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <button className="plus-minus" onClick={minQty}>
                    -
                  </button>
                  <input
                    type="text"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="qty mx-3"
                  />
                  <button className="plus-minus" onClick={addQty}>
                    +
                  </button>
                </div>
                <p className="total-harga-qty">Rp.{data.harga}</p>
              </div>
              <div className="d-flex justify-content-between">
                <button className="beli">
                  <Link to={"/cart"} className="nav-link text-white">
                    Beli
                  </Link>
                </button>
                <button
                  className="add-to-cart"
                  onClick={() => AddToCart(data, qty)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
  // }
};

export default Detail;

// <div className="div-color mt-4">
//   <h5 className="fw-bold">Color</h5>
//   <div className="d-flex">
//     {data.color.map((dataColor, id) => {
//       return (
//         <div
//           key={id}
//           className="color"
//           style={{ background: dataColor }}
//         ></div>
//       );
//     })}
//   </div>
// </div>

// <div className="div-size mt-4">
//   <h5 className="fw-bold">Size</h5>
//   <div className="d-flex">{size()}</div>
// </div>

// const size = () => {
//   const sizes = data.size;
//   sizes.split(" ").map((size, id) => {
//     return (
//       <div key={id} className="size">
//         {size}
//       </div>
//     );
//   });
// };
