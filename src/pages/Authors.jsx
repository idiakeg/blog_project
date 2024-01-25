import React from "react";
import Avatar_1 from "../mern-blog-assets-main/avatar1.jpg";
import Avatar_2 from "../mern-blog-assets-main/avatar2.jpg";
import Avatar_3 from "../mern-blog-assets-main/avatar3.jpg";
import Avatar_4 from "../mern-blog-assets-main/avatar4.jpg";
import Avatar_5 from "../mern-blog-assets-main/avatar5.jpg";
import { Link } from "react-router-dom";

const authorData = [
  {
    id: 1,
    avatar: Avatar_1,
    name: "Ernest Achiever",
    posts: 3,
  },
  {
    id: 2,
    avatar: Avatar_2,
    name: "Jane Doe",
    posts: 5,
  },
  {
    id: 3,
    avatar: Avatar_3,
    name: "Dramani Mahama",
    posts: 0,
  },
  {
    id: 4,
    avatar: Avatar_4,
    name: "Nana Addo",
    posts: 2,
  },
  {
    id: 5,
    avatar: Avatar_5,
    name: "Hajia Bintu",
    posts: 1,
  },
];

const Authors = () => {
  return (
    <section className="authors">
      {authorData.length > 0 ? (
        <div className="container authors__container">
          {authorData.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`name of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No authors found</h2>
      )}
    </section>
  );
};

export default Authors;
