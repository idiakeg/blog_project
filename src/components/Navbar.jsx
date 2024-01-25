import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../mern-blog-assets-main/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="nav__logo"
          onClick={() => setIsNavShowing(false)}
        >
          <img src={logo} alt="nav logo" />
        </Link>
        <ul className={`nav__menu ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          <li>
            <Link
              to="/profile/profile_id"
              onClick={() => setIsNavShowing((prev) => !prev)}
            >
              Ernest Achiever
            </Link>
          </li>
          <li>
            <Link to="/create" onClick={() => setIsNavShowing((prev) => !prev)}>
              Create Post
            </Link>
          </li>
          <li>
            <Link
              to="/authors"
              onClick={() => setIsNavShowing((prev) => !prev)}
            >
              Authors
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={() => setIsNavShowing((prev) => !prev)}>
              Logout
            </Link>
          </li>
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
