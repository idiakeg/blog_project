import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";

const Login = () => {
    const { handleLogin, isLoading, errorMessage } = useAuth();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(userData.email, userData.password);
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="login">
                    <div className="container login__container">
                        <h2>Sign In</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="form login__form"
                        >
                            {errorMessage && (
                                <p className="form__error-message">
                                    {errorMessage}
                                </p>
                            )}
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                autoFocus
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit" className="btn primary">
                                Login
                            </button>
                        </form>
                        <small>
                            Don't have an account?{" "}
                            <Link to={`/register`}>sign up </Link>
                        </small>
                    </div>
                </section>
            )}
        </>
    );
};

export default Login;
