import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(userData);
  };

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>
        <form action="" className="form register__form">
          <p className="form__error-message">This is an error message</p>
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
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to={`/login`}>sign in </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
