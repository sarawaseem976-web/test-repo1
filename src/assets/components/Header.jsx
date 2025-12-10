import React, { useContext } from "react";
import { Link } from "react-router";
import { ContextCart } from "../../App";

function Header() {
  const { cart, setCart } = useContext(ContextCart);

  return (
    <>
      <div className="row bg-body-tertiary mb-5">
        <div className="col-md-10">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-2 pt-2">
          <Link to="/cart">
            <i className="bi bi-bag" style={{ fontSize: "22px" }}></i>
            {cart.length}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
