// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Cart items with quantity: [{ id, quantity }]
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle add/remove/increment/decrement
  const handleCartToggle = (productId, action) => {
    const item = cartItems.find((i) => i.id === productId);

    if (action === "increment") {
      if (item) {
        setCartItems((prev) =>
          prev.map((i) =>
            i.id === productId ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        setCartItems([...cartItems, { id: productId, quantity: 1 }]);
      }
    } else if (action === "decrement") {
      if (item) {
        setCartItems((prev) =>
          prev
            .map((i) =>
              i.id === productId
                ? { ...i, quantity: Math.max(i.quantity - 1, 1) }
                : i
            )
        );
      }
    } else if (action === "remove") {
      setCartItems((prev) => prev.filter((i) => i.id !== productId));
    }
  };

  // Filter products by search term
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} setSearchTerm={setSearchTerm} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <header className="bg-primary py-5">
                <div className="container text-center text-white">
                  <h1 className="display-4 fw-bold">Welcome to Mobile Shop</h1>
                  <p className="lead">Find the best deals on the latest gadgets</p>
                </div>
              </header>

              <div className="container my-5">
                <ProductList
                  products={filteredProducts}
                  cartItems={cartItems}
                  handleCartToggle={handleCartToggle}
                />
              </div>
            </>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cartItems={cartItems}
              handleCartToggle={handleCartToggle}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
