import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../mern-blog-assets-main/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { handleLogout } = useAuth();
    const [isNavShowing, setIsNavShowing] = useState(false);

    let appUser = JSON.parse(localStorage.getItem("bird_app_user"));

    const handleLogoutClick = () => {
        setIsNavShowing((prev) => !prev);
        handleLogout();
    };

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
                <ul
                    className={`nav__menu ${
                        isNavShowing ? "show__nav" : "hide__nav"
                    }`}
                >
                    {appUser && (
                        <>
                            <li>
                                <Link
                                    to="/profile/profile_id"
                                    onClick={() =>
                                        setIsNavShowing((prev) => !prev)
                                    }
                                >
                                    {appUser?.name}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/create"
                                    onClick={() =>
                                        setIsNavShowing((prev) => !prev)
                                    }
                                >
                                    Create Post
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <Link
                            to="/authors"
                            onClick={() => setIsNavShowing((prev) => !prev)}
                        >
                            Authors
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={handleLogoutClick}>
                            {appUser ? "Logout" : "Login"}
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
