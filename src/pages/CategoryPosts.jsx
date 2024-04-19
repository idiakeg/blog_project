import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";

const CategoryPosts = () => {
    const { getCategoryPost, categoryPosts, isLoading } = useAuth();
    const { category } = useParams();

    useEffect(() => {
        getCategoryPost(category);
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading />
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
