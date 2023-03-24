import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSteaksApi } from "../rtk/slices/steaks-slice";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { addToCart } from "../rtk/slices/cart-slice";

const Steaks = () => {
  const steaks = useSelector((state) => state.steaks); //get data from fetchSteaksApi
  const dispatch = useDispatch(); //dispatch our actions to cartSlice

  useEffect(() => {
    dispatch(fetchSteaksApi());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {steaks.map((steak) => (
          <Col className="py-5" key="steak.id">
            <Card style={{ width: "18rem" }} className="mt-5">
              <Card.Img variant="top" src={steak.img} />
              <Card.Body>
                <Card.Title>{steak.title}</Card.Title>
                <Card.Text>{steak.dsc} </Card.Text>
                <Card.Text>{steak.price} $</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(steak))}
                >
                  get Steak
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Steaks;
