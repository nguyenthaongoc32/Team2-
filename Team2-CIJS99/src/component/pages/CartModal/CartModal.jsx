import React from "react";
import { Link } from "react-router-dom";
import '../CartModal/CartModal.css'
const CartModal = (props) => {
  const {
    cart = [],
    updateCartQuantity,
    handleDeleteProductFromCart,
    completedOrder,
    setCompletedOrder,
  } = props;
  const isEmpty = cart.length === 0;

  let cartBodyElement = null;

  if (isEmpty) {
    cartBodyElement = (
      <tr>
        <td>There are no products in the cart!</td>
      </tr>
    );
  } else {
    cartBodyElement = cart.map((cartItem, index) => {
      const { data, quantity } = cartItem;
      const { id, title, price, image = {} } = data;
      const { mainImg, othersImg = [] } = image;
      const totalPricePerProduct =Math.round( quantity * price);

      const isDisabledDecreaseButton = quantity === 1;

      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>
            <img src={mainImg} width={30} />
          </td>
          <td>{title}</td>
          <td>${Math.round(price)}</td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-primary"
                disabled={isDisabledDecreaseButton}
                onClick={() => updateCartQuantity(id, -1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="btn btn-primary"
                onClick={() => updateCartQuantity(id, +1)}
              >
                +
              </button>
            </div>
          </td>
          <td>${Math.round(totalPricePerProduct)}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteProductFromCart(id)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
      );
    });
  }

  const totalPrice = isEmpty
    ? 0
    : cart.reduce((acc, cur) => {
        return acc + cur.data.price * cur.quantity;
      }, 0);

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              SHOPPING CART
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body ">
            <table className="table table-image">
              <thead >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col" >Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">...</th>
                </tr>
              </thead>
             <tbody className="tbody-products">
                {cartBodyElement}
                <tr>
                  <th>SUBTOTAL</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <b>${Math.round(totalPrice)}</b>
                  </td>
                  <td></td>
                </tr>
              </tbody> 
   
            </table>
          </div>

          <div className="modal-footer">
            <Link to="/checkout">
              <button
                onClick={() => setCompletedOrder(false)}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
