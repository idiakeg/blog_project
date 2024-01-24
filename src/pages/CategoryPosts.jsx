import React from "react";
import { dummyPost } from "../data";
import PostItem from "../components/PostItem";

const CategoryPosts = () => {
  return (
    <section>
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

export default CategoryPosts;
