import React from "react";
const ProductCard = ({ product, cartItems, handleCartToggle }) => {
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  return (
    <div className="card product-card h-100 border-0 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/200x200?text=No+Image";
        }}
        className="card-img-top rounded-top"
        style={{ height: "200px", objectFit: "contain", transition: "transform 0.3s" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="fw-bold fs-5 text-primary">${product.price}</p>
   
        <div className="d-flex justify-content-center align-items-center mb-2">
          <button
            className="btn btn-danger me-2"
            onClick={() => handleCartToggle(product.id, "decrement")}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="fw-bold">{quantity}</span>
          <button
            className="btn btn-success ms-2"
            onClick={() => handleCartToggle(product.id, "increment")}
          >
            +
          </button>
        </div>

        {quantity > 0 && (
          <button
            className="btn btn-outline-danger w-100"
            onClick={() => handleCartToggle(product.id, "remove")}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
