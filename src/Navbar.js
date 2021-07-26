import React, { useState } from "react";
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

import { Link } from "react-router-dom";

const Navigasi = (props) => {
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
            <div>
              <Link to="/login" className="nav-link">
                <Button className="rounded-pill login nav-item">Sign In</Button>
              </Link>
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
