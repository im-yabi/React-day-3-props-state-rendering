import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, setSearchTerm }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Mobile Shop</Link>

        <form className="d-flex mx-auto" style={{ maxWidth: "400px", flex: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div>
          <Link to="/cart" className="btn btn-outline-light position-relative">
            <span className={`cart-icon ${animate ? "pulse" : ""}`}>🛒</span>
            {cartCount > 0 && (
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
