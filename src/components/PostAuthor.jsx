import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../mern-blog-assets-main/avatar1.jpg";

const PostAuthor = ({ authorID }) => {
  return (
    <Link to={`/post/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="avatar of the author" />
      </div>
      <div className="post__author-details">
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
