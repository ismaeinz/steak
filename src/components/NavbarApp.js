import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavbarApp = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const total = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="#home" className="navbar-brand">
          Steak {""}
          <img
            src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/null/external-steak-food-delivery-photo3ideastudio-lineal-color-photo3ideastudio.png"
            alt="Steak"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Steaks
            </Link>
            <Link to="/cart" className="nav-link">
              Cart {cart.length} total price is {total}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
