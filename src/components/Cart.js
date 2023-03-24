import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import { removeFromCart, clearCart } from "../rtk/slices/cart-slice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Container>
      <div>
        <Button
          variant="danger"
          className="py-2 m-2"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear items from your cart
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Number </th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>quantity </th>
              <th>actions </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{cart.indexOf(item) + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100px",
                      hight: "100px",
                    }}
                  />
                </td>
                <td> {item.price}</td>

                <td>{item.quantity}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>total price :{total}</div>
      </div>
    </Container>
  );
};

export default Cart;
