import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const { cart = [], handleOrder } = props;
  const isEmpty = cart.length === 0;
  const totalPrice = isEmpty
    ? 0
    : cart.reduce((acc, cur) => {
        return acc + cur.data.price * cur.quantity;
      }, 0);

  let billBodyElement = null;
  let billBodyElement2 = cart.map((cartItem, index) => {
    const { data, quantity } = cartItem;
    const { id, title, price } = data;
    const totalPricePerProduct = quantity * price;

    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{quantity}</td>
        <td>{totalPricePerProduct}</td>
      </tr>
    );
  });
  let noted =
    "Make sure your billing details are correct before placing order.";

  if (isEmpty) {
    billBodyElement = (
      <table className="bill">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    billBodyElement = (
      <table className="bill">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {billBodyElement2}
          <tr>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const moModal = () => {
    handleOrder();
    billBodyElement = null;
    noted =
      "Your order is on delivery. Please contact us if you require assistance or wish to make alternate arrangements.";
  };

  return (
    <div className="checkout">
      <div className="path">
        <Link to="/">HOME/</Link>
        <Link to="/checkout">CHECKOUT</Link>
      </div>
      <div className="info">
        <div className="label">Billing details</div>
        <form name="formReg" action method="get">
          <label htmlFor="name">Full Name</label>
          <br />
          <input type="text" id="name" />
          <br />
          <label htmlFor="street">Street address</label>
          <br />
          <input
            type="text"
            id="street"
            placeholder="House number and street name"
          />
          <br />
          <label htmlFor="city">Town / City</label>
          <br />
          <input type="text" id="city" />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="tel" id="phone" />
          <br />
          <label htmlFor="email">Email address</label>
          <br />
          <input type="email" id="email" />
          <br />
        </form>
        <div className="label">Your order</div>
        {billBodyElement}
        <div className="cash">
          <div className="note" id="note">
            {noted}
          </div>
          <button
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => moModal()}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "fit-content" }}
        >
          <div className="modal-content" style={{ backgroundColor: "#105989" }}>
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Order placed successfully 🙌</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
