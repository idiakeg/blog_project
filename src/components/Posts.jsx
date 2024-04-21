import { useEffect } from "react";
import PostItem from "./PostItem";

import { useAuth } from "../context/AuthProvider";
import Loading from "./Loading/Loading";

const Posts = () => {
    const { allPosts, isLoading, getAllPost } = useAuth();

    useEffect(() => {
        getAllPost();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="posts">
                    <h1 className="section_title">All Posts</h1>
                    {allPosts?.length > 0 ? (
                        <div className="container post__container">
                            {allPosts.map(
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

export default Posts;
