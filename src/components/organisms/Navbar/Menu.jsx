import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Cart from "./Cart";

export default function Menu() {
  const location = useLocation();

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/catalog" && "active"
            }`}
            aria-current="page"
            to="/catalog"
          >
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname === "/login" && "active"}`}
            aria-current="page"
            href="#!"
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              location.pathname === "/register" && "active"
            }`}
            aria-current="page"
            href="#!"
          >
            Register
          </a>
        </li>
        <li className="nav-item d-none d-lg-block">
          <a
            className={`nav-link ${location.pathname === "/cart" && "active"}`}
            aria-current="page"
            href="#!"
          >
            <Cart />
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          size="40"
        />
        <button className="btn btn-primary" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
