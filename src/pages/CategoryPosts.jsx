import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import { useAuth } from "../context/AuthProvider";
import Skeleton from "../components/Skeleton/Skeleton";

const CategoryPosts = () => {
    const { getCategoryPost, categoryPosts, isLoading } = useAuth();
    const { category } = useParams();

    useEffect(() => {
        getCategoryPost(category);
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
                    {categoryPosts.length > 0 ? (
                        <div className="container post__container">
                            {categoryPosts.map(
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

export default CategoryPosts;
