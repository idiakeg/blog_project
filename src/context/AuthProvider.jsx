import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    // state definitions
    const [allPosts, setAllPosts] = useState([]);
    const [singlePost, setSinglePosts] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");

    const { REACT_APP_BASE_URL } = process.env;

    // -----> Get All Posts
    const getAllPost = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${REACT_APP_BASE_URL}/posts`);
            const { status, message, posts } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setAllPosts(posts);
                return;
            }

            throw new Error(message);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    // -----> Get Single Posts
    const getSinglePost = async (post_id) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/${post_id}`
            );
            const { status, message, post } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setSinglePosts(post);
                // console.log(singlePost);
                return;
            }
            throw new Error(message);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    // -----> Edit Post
    const editPost = async (post_id, data, token) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/${post_id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                    body: data,
                }
            );
            const { status, message, editedPost } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setSinglePosts(editedPost);
                navigate(-1);
                return;
            }

            throw new Error(message);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    // ======== AUTHENTICATION =========
    // ------> Login handler
    const handleLogin = async (email, password) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${REACT_APP_BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const { status, message, token, user } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setUser(user);
                localStorage.setItem("bird_app_user", JSON.stringify(user));
                setToken(token);
                localStorage.setItem(
                    "bird_app_user_token",
                    JSON.stringify(token)
                );
                navigate("/");
                return;
            }

            throw new Error(message);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    // ------> Register handler
    const handleRegister = async (data) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/users/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const { status, message } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                navigate("/login");
                return;
            }

            throw new Error(message);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    // ------> Logout handler
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("bird_app_user");
        setToken("");
        localStorage.removeItem("bird_app_user_token");
        // navigate("/login")
    };

    return (
        <AuthContext.Provider
            value={{
                allPosts,
                isLoading,
                errorMessage,
                handleLogin,
                handleLogout,
                getSinglePost,
                singlePost,
                editPost,
                getAllPost,
                handleRegister,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
