import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    // state definitions
    const [allPosts, setAllPosts] = useState([]);
    const [singlePost, setSinglePosts] = useState(null);
    const [categoryPosts, setCategoryPosts] = useState([]);
    const [authorPost, setAuthorPosts] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [totalPosts, setTotalPosts] = useState();
    const [pageNumber, setPageNumber] = useState();

    const { REACT_APP_BASE_URL } = process.env;

    const redirectPath = state || "/";

    // -----> Get All Posts
    const getAllPost = async (page_number = 1) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/?page_number=${page_number}`
            );
            const { status, message, posts, totalPosts, pageNumber } =
                await response.json();
            if (status === "success") {
                setIsLoading(false);
                setAllPosts(posts);
                setTotalPosts(totalPosts);
                setPageNumber(pageNumber);
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

    // -----> Create Post
    const createPost = async (data, token) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${REACT_APP_BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    Authorization: `bearer ${token}`,
                },
                body: data,
            });

            const { status, message, post } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                navigate("/");
                return;
            }

            throw new Error(message);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    };

    // -----> Get Posts by category
    const getCategoryPost = async (category) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/categories/${category}`
            );
            const { status, message, categoryPost } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setCategoryPosts(categoryPost);
                return;
            }
            throw new Error(message);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    // -----> Get Posts by author
    const getPostByAuthor = async (author_id) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/user/${author_id}`
            );
            const { status, message, authorPosts } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                setAuthorPosts(authorPosts);
                return;
            }
            throw new Error(message);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    // -----> Delete Post
    const deletePost = async (post_id, token) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/posts/${post_id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            );
            const { status } = await response.json();
            if (status === "success") {
                setIsLoading(true);
                navigate(-1);
                return;
            }
            throw new Error();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    // -----> Get All Authors
    const getAllAuthors = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${REACT_APP_BASE_URL}/users`);
            const { status, allUsers, message } = await response.json();
            if (status === "success") {
                setAuthors(allUsers);
                setIsLoading(false);
                return;
            }
            throw new Error(message);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
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
                navigate(redirectPath, { replace: true });
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

    // ------> Change avatar handler
    const changeAvatar = async (data, token) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/users/change_avatar`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                    body: data,
                }
            );
            const { status, updatedAvatar, message } = await response.json();
            if (status === "success") {
                localStorage.setItem(
                    "bird_app_user",
                    JSON.stringify(updatedAvatar)
                );
                setIsLoading(false);
                return;
            }
            throw new Error(message);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    // ------> update handler
    const updateUser = async (data, token) => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/users/edit_user`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );
            const { status, message, updatedUser } = await response.json();
            if (status === "success") {
                setIsLoading(false);
                localStorage.setItem(
                    "bird_app_user",
                    JSON.stringify(updatedUser)
                );
                return;
            }
            throw new Error(message);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
            console.log(error);
        }
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
                createPost,
                getCategoryPost,
                categoryPosts,
                getPostByAuthor,
                authorPost,
                deletePost,
                getAllAuthors,
                authors,
                changeAvatar,
                updateUser,
                totalPosts,
                pageNumber,
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
