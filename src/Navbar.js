import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
const api = "http://localhost:4000/";
const Navigasi = (props) => {
  const history = useHistory();

  const aToken = localStorage.getItem("aToken");
  const [display, setDisplay] = useState("none");
  const [total_keranjang, setTotal_keranjang] = useState(0);

  useEffect(
    () =>
      axios
        .get(api + "orders")
        .then((res) => setTotal_keranjang(res.data.data)),
    []
  );

  const handleSmallProfile = () => {
    setDisplay("block");
  };
  const removeSmallProfile = () => {
    setDisplay("none");
  };
  const deleteAccsesToken = () => {
    localStorage.removeItem("aToken");
    history.push("/login");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            Your<span className="brand">Brand</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Category
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className="nav-link" to="/category/jacket">
                      Jacket
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/category/t-shirt">
                      t-shirt
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/category/kemeja">
                      kemeja
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {aToken ? (
              <div className="d-flex">
                <div className="position-relative">
                  <ion-icon
                    name="contact"
                    onMouseOut={() => removeSmallProfile()}
                    onMouseMove={() => handleSmallProfile()}
                    style={{ fontSize: 28 + "px", color: "grey" }}
                  ></ion-icon>
                  <div
                    onMouseMove={() => handleSmallProfile()}
                    onMouseOut={() => removeSmallProfile()}
                    className="small-profile text-center bg-primary position-absolute"
                    style={{ display: display }}
                  >
                    <ion-icon
                      name="contact"
                      style={{ fontSize: 52 + "px", color: "grey" }}
                    ></ion-icon>
                    <h6 className="fw-bold mb-0">Amienul Rana</h6>
                    <span className="text-muted">amienulrana@gmail.com</span>
                    <button className="profile">Profile</button>
                    <hr />
                    <button className="sign-out" onClick={deleteAccsesToken}>
                      Sign Out
                    </button>
                    <div className="segitiga"></div>
                  </div>
                </div>
                <Link to="/cart">
                  <div
                    style={{ transform: "translateX(10px)" }}
                    className="position-relative "
                  >
                    <ion-icon
                      name="cart"
                      style={{ fontSize: 30 + "px", color: "#ffc164" }}
                    ></ion-icon>
                    <span className="total-items">
                      {total_keranjang.length}
                    </span>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="nav-link">
                  <button className="rounded-pill login nav-item">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
