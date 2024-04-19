import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";

const Register = () => {
    const { handleRegister, isLoading, errorMessage } = useAuth();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
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
        handleRegister(userData);
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="register">
                    <div className="container register__container">
                        <h2>Sign Up</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="form register__form"
                        >
                            {errorMessage && (
                                <p className="form__error-message">
                                    {errorMessage}
                                </p>
                            )}

                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                value={userData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                placeholder="Confirm password"
                                name="confirm_password"
                                value={userData.confirm_password}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="btn primary">
                                Register
                            </button>
                        </form>
                        <small>
                            Already have an account?{" "}
                            <Link to={`/login`}>sign in </Link>
                        </small>
                    </div>
                </section>
            )}
        </>
    );
};

export default Register;
