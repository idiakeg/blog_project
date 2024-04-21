import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Authors from "./pages/Authors";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoutes from "./components/ProtectedRoutes";

const _router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <Layout />{" "}
            </AuthProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "register", element: <Register /> },
            { path: "/posts/:id", element: <PostDetail /> },
            { path: "login", element: <Login /> },
            { path: "authors", element: <Authors /> },
            { path: "posts/categories/:category", element: <CategoryPosts /> },
            { path: "post/users/:id", element: <AuthorPosts /> },
            {
                path: "create",
                element: (
                    <ProtectedRoutes>
                        <CreatePost />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "profile/:id",
                element: (
                    <ProtectedRoutes>
                        <UserProfile />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "myposts/:id",
                element: (
                    <ProtectedRoutes>
                        <Dashboard />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "posts/:id/edit",
                element: (
                    <ProtectedRoutes>
                        <EditPost />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={_router} />
    </React.StrictMode>
);
