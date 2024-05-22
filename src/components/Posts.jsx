import { useEffect } from "react";
import PostItem from "./PostItem";

import { useAuth } from "../context/AuthProvider";
import Skeleton from "./Skeleton/Skeleton";
import Pagination from "./pagination/Pagination";

const Posts = () => {
    const { allPosts, isLoading, getAllPost, totalPosts, pageNumber } =
        useAuth();

    const nextPage = (page_number) => {
        getAllPost(page_number);
    };

    useEffect(() => {
        getAllPost();
    }, []);
    return (
        <>
            {isLoading ? (
                <section className="container skeleton_cont">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </section>
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
                    {allPosts.length > 0 && (
                        <Pagination
                            pageNo={pageNumber}
                            nextPage={nextPage}
                            totalPosts={totalPosts}
                        />
                    )}
                </section>
            )}
        </>
    );
};

export default Posts;
