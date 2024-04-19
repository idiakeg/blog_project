import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";

const AuthorPosts = () => {
    const { id } = useParams();
    const { getPostByAuthor, authorPost, isLoading } = useAuth();
    useEffect(() => {
        getPostByAuthor(id);
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section>
                    <h1 className="section_title">
                        Posts by {authorPost[0]?.creator?.name}
                    </h1>
                    {authorPost.length > 0 ? (
                        <div className="container post__container">
                            {authorPost.map(
                                ({
                                    _id,
                                    thumbnail,
                                    category,
                                    description,
                                    title,
                                    creator,
                                    createdAt,
                                }) => (
                                    <PostItem
                                        key={_id}
                                        thumbnail={thumbnail}
                                        category={category}
                                        body={description}
                                        title={title}
                                        authorID={creator._id}
                                        authorName={creator.name}
                                        authorAvatar={creator?.avatar}
                                        postId={_id}
                                        createdAt={createdAt}
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <h2 className="center">No post found</h2>
                    )}
                </section>
            )}
        </>
    );
};

export default AuthorPosts;
