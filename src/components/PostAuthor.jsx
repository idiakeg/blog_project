import React from "react";
import { Link } from "react-router-dom";
import default_avatar from "../assets/default_profile.jpeg"
import moment from "moment"

const PostAuthor = ({ authorID, authorName, authorAvatar, createdAt }) => {
  let longAgo = moment(createdAt).fromNow()
  return (
    <Link to={`/post/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img src={ 
          authorAvatar ? `${process.env.REACT_APP_UPLOADS_URL}/${authorAvatar}` :
          default_avatar} alt="avatar of the author" />
      </div>
      <div className="post__author-details">
        <h5>By: {authorName}</h5>
        <small>{longAgo}</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
