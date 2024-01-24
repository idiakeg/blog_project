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
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

const _router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "/posts/:id", element: <PostDetail /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: " ", element: <CategoryPosts /> },
      { path: "post/:id/edit", element: <AuthorPosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "post/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={_router} />
  </React.StrictMode>
);
