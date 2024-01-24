import React from "react";
import PostItem from "./PostItem";

import { dummyPost } from "../data";

const Posts = () => {
  return (
    <section className="posts">
      {dummyPost.length > 0 ? (
        <div className="container post__container">
          {dummyPost.map(
            ({ id, thumbnail, category, body, title, authorID }) => (
              <PostItem
                key={id}
                thumbnail={thumbnail}
                category={category}
                body={body}
                title={title}
                authorID={authorID}
                postId={id}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No post found</h2>
      )}
    </section>
  );
};

export default Posts;
