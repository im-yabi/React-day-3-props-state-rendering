import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isInCart, handleCartToggle }) => {
  return (
    <div className="card product-card h-100 border-0 shadow-sm">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/200x200?text=No+Image";
          }}
          className="card-img-top rounded-top"
          style={{ height: "200px", objectFit: "contain", transition: "transform 0.3s ease" }}
        />
      </div>

      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="fw-bold fs-5 text-primary">${product.price}</p>

        <button
          className={`btn ${isInCart ? "btn-danger" : "btn-success"} w-100 mb-2`}
          onClick={() => handleCartToggle(product.id)}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        {/* Shop Now button linking to a product detail page */}
        <Link to={`/shop/${product.id}`} className="btn-shop w-100 mt-auto text-center">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
