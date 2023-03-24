import React from "react";
import { Container } from "react-bootstrap";
import NavbarApp from "./components/NavbarApp";
import { Route, Routes } from "react-router-dom";
import Steaks from "./components/Steaks";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Container fluid>
      <NavbarApp />
      <Container>
        <Routes>
          <Route path="/" element={<Steaks />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;
