import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, cartItems, handleCartToggle }) => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-lg-3">
          <ProductCard
            product={product}
            cartItems={cartItems}
            handleCartToggle={handleCartToggle}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
