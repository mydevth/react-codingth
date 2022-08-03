import React from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Chonburi.biz logo"
          />{" "}
          Chonburi.Biz
        </NavLink>
        {/* <Container fluid> */}
        {/* <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Chonburi.biz logo"
          />{" "}
          Chonburi.biz
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/product"
              activeClassName="active"
            >
              สินค้า
            </NavLink>
            <NavLink className="nav-link" to="/shop" activeClassName="active">
              ร้านอาหาร
            </NavLink>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              เกี่ยวกับเรา
            </NavLink>

            <NavDropdown
              title="Workshop (Pagination + CRUD"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital");
                }}
              >
                ข้อมูลสภานพยาบาล (Pagination)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/category");
                }}
              >
                หมวดหมู่ข่าว (CRUD)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default NavBar;
