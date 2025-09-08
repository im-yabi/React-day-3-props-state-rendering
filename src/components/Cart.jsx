import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ products, cartItems, handleCartToggle }) => {
  // cartItems: array of objects { id, quantity }
  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  // Calculate total
  const totalAmount = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (productId) => {
    handleCartToggle(productId, "increment");
  };

  const handleDecrement = (productId) => {
    handleCartToggle(productId, "decrement");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartProducts.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty!</p>
          <Link to="/" className="btn btn-shop">
            Go to Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="cart-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "80px", marginRight: "15px" }}
                  />
                  <div>
                    <h5>{product.name}</h5>
                    <p className="mb-0">${product.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleCartToggle(product.id, "remove")}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="text-end mt-4">
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
            <Link to="/" className="btn btn-shop mt-2">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
