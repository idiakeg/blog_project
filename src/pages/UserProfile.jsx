import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../mern-blog-assets-main/avatar15.jpg";
import { FaCheck, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);

  const [user_profile, setUser_profile] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    setUser_profile((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/postid`} className="btn">
          My posts
        </Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="avatar of the user" />
            </div>
            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png, jpg, jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h2>Ernest Achiever</h2>
          <form className="form profile__form">
            <p className="form__error-message">This is an error message</p>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={user_profile.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user_profile.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Current password"
              name="currentPassword"
              value={user_profile.currentPassword}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="New password"
              name="newPassword"
              value={user_profile.newPassword}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm new password"
              name="confirmNewPassword"
              value={user_profile.confirmNewPassword}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn primary">
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
