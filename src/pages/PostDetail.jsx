import { useParams } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

const PostDetail = () => {
    const { id } = useParams();
    const { getSinglePost, singlePost, isLoading, deletePost } = useAuth();
    const appUser = JSON.parse(localStorage.getItem("bird_app_user"));
    const isMatch = appUser?._id === singlePost?.creator?._id;
    const token = JSON.parse(localStorage.getItem("bird_app_user_token"));

    const handleDeletePost = () => {
        deletePost(id, token);
    };
    useEffect(() => {
        getSinglePost(id);
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="post__detail">
                    <div className="container post__detail-container">
                        <div className="post__detail-header">
                            <PostAuthor
                                authorID={singlePost?.creator?._id}
                                authorName={singlePost?.creator?.name}
                                authorAvatar={singlePost?.creator?.avatar}
                                createdAt={singlePost?.createdAt}
                            />
                            {isMatch && (
                                <div className="post__detail-buttons">
                                    <Link
                                        to={`/posts/post_id/edit`}
                                        className="btn sm primary"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        onClick={handleDeletePost}
                                        className="btn sm danger"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            )}
                        </div>
                        <h1>{singlePost?.title}</h1>
                        <div className="post__detail-thumbnail">
                            <img
                                src={`${process.env.REACT_APP_UPLOADS_URL}/${singlePost?.thumbnail}`}
                                alt="thumbnail"
                            />
                        </div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: singlePost?.description,
                            }}
                        ></p>
                    </div>
                </section>
            )}
        </>
    );
};

export default PostDetail;
