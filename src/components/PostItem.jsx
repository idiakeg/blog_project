import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
    thumbnail,
    category,
    body,
    title,
    authorID,
    postId,
    authorName,
    authorAvatar,
    createdAt,
}) => {
    const shortBody = body.length > 145 ? body.substr(0, 145) + "..." : body;

    const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
    return (
        <article className="post">
            <div className="post__thumbnail">
                <img
                    src={`${process.env.REACT_APP_UPLOADS_URL}/${thumbnail}`}
                    alt={title}
                />
            </div>
            <div className="post__content">
                <Link to={`/posts/${postId}`}>
                    <h3>{postTitle}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: shortBody }}></p>
                <div className="post__footer">
                    <PostAuthor
                        authorID={authorID}
                        authorName={authorName}
                        authorAvatar={authorAvatar}
                        createdAt={createdAt}
                    />
                    <Link
                        to={`/posts/categories/${category}`}
                        className="btn category"
                    >
                        {category}
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostItem;
