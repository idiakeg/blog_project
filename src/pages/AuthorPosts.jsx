import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import { useAuth } from "../context/AuthProvider";
import Skeleton from "../components/Skeleton/Skeleton";

const AuthorPosts = () => {
    const { id } = useParams();
    const { getPostByAuthor, authorPost, isLoading } = useAuth();
    useEffect(() => {
        getPostByAuthor(id);
    }, []);
    return (
        <>
            {isLoading ? (
                <section className="container skeleton_cont">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </section>
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
