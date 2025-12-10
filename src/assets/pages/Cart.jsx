import React, { useContext, useMemo } from "react";
import { ContextCart } from "../../App";

function Cart() {
  const { cart, setCart } = useContext(ContextCart);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((v) => v._id !== id));
  };

  const increaseQty = (id) => {
    const inc = cart.map((v) =>
      v._id === id ? { ...v, qty: (v.qty ?? 1) + 1 } : v
    );
    setCart(inc);
  };

  const decreaseQty = (id) => {
    const dec = cart.map((v) => (v._id === id ? { ...v, qty: v.qty - 1 } : v));
    setCart(dec);
  };

  const delivery = 200;
  const grandTotal = cart.reduce(
    (sum, v) => sum + Number(v.price) * (v.qty ?? 1),
    0
  );
  const Total =
    cart.reduce((sum, v) => sum + Number(v.price) * (v.qty ?? 1), 0) + delivery;

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((val) => {
            const qty = val.qty ?? 1;
            const price = Number(val.price) || 0;
            const lineTotal = price * qty;

            return (
              <tr key={val._id}>
                <td>
                  <img
                    src={val.image}
                    alt={val.title}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{val.title}</td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary me-1"
                    onClick={() => decreaseQty(val._id)}
                    disabled={qty <= 1}
                  >
                    -
                  </button>
                  {qty}
                  <button
                    className="btn btn-sm btn-secondary ms-1"
                    onClick={() => increaseQty(val._id)}
                  >
                    +
                  </button>
                </td>
                <td>{price.toFixed(2)}</td>
                <td>{lineTotal.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(val._id)}
                  >
                    <i className="bi bi-trash2"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-danger"
          onClick={clearCart}
          style={{ height: "40px" }}
        >
          Clear Cart
        </button>
        <div className="me-5 text-end">
          <h5>Grand Total:</h5>
          <p className="mb-0">
            <b>Delivery Charges:</b> {delivery}
          </p>
          <p className="mb-0">
            <b>Sub Total:</b> {grandTotal.toFixed(2)}
          </p>
          <p className="mb-0">
            <b>Total:</b> {Total.toFixed(2)}
          </p>
          <button className="btn btn-danger">checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
