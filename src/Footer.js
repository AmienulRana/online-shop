import React from "react";
import { Container, Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container style={{ marginTop: 100 + "px" }}>
        <Row className="justify-content-between">
          <Col className="col-5 col-md-4 mt-4">
            <h5 className="title-footer">Information</h5>
            <p>Kebijakan Hak cipta</p>
            <p>Lokasi Toko</p>
            <p>Kebijakan Privacy</p>
          </Col>
          <Col className="col-5 col-md-4 mt-4">
            <h5 className="title-footer">Help</h5>
            <p>Cara belanja</p>
            <p>Panduan ukuran</p>
          </Col>
          <Col className="col-5 col-md-4 mt-4">
            <h5 className="title-footer">Contact</h5>
            <p>+62-2131-1242-5882</p>
            <p>09:00 - 20:00 (senin - sabtu)</p>
            <div className="flex" style={{ fontSize: 24 + "px" }}>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </Col>
          <p className="fw-bold text-center mt-4">
            All Rights Reserved © 2021 yourbrand.com{" "}
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
