import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../mern-blog-assets-main/avatar15.jpg";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";
import { FaCheck, FaEdit } from "react-icons/fa";
import default_profile from "../assets/default_profile.jpeg";

const UserProfile = () => {
    const { changeAvatar, isLoading, errorMessage, updateUser } = useAuth();
    const user = JSON.parse(localStorage.getItem("bird_app_user"));
    const token = JSON.parse(localStorage.getItem("bird_app_user_token"));
    const [avatar, setAvatar] = useState("");
    const [isAvatarChanged, setIsAvatarChanged] = useState(false);

    const [user_profile, setUser_profile] = useState({
        name: user?.name,
        email: user?.email,
        currentPassword: "",
        newPassword: "",
        newConfirmPassword: "",
    });

    const handleInputChange = (e) => {
        setUser_profile((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const changeAvatarHandler = () => {
        const fd = new FormData();
        fd.append("avatar", avatar);
        setIsAvatarChanged(false);
        changeAvatar(fd, token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user_profile, token);
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="profile">
                    <div className="container profile__container">
                        <Link to={`/myposts/${user?._id}`} className="btn">
                            My posts
                        </Link>
                        <div className="profile__details">
                            <div className="avatar__wrapper">
                                <div className="profile__avatar">
                                    <img
                                        src={
                                            user?.avatar
                                                ? `${process.env.REACT_APP_UPLOADS_URL}/${user?.avatar}`
                                                : default_profile
                                        }
                                        alt="avatar of the user"
                                    />
                                </div>
                                <form className="avatar__form">
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="avatar"
                                        accept="png, jpg, jpeg"
                                        onChange={(e) =>
                                            setAvatar(e.target.files[0])
                                        }
                                    />
                                    <label
                                        onClick={() => setIsAvatarChanged(true)}
                                        htmlFor="avatar"
                                    >
                                        <FaEdit />
                                    </label>
                                </form>
                                {isAvatarChanged && (
                                    <button
                                        className="profile__avatar-btn"
                                        onClick={changeAvatarHandler}
                                    >
                                        <FaCheck />
                                    </button>
                                )}
                            </div>
                            <h2>{user?.name}</h2>
                            <form
                                onSubmit={handleSubmit}
                                className="form profile__form"
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
                                    name="newConfirmPassword"
                                    value={user_profile.newConfirmPassword}
                                    onChange={handleInputChange}
                                />
                                <button type="submit" className="btn primary">
                                    Update details
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default UserProfile;
