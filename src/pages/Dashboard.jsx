import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import default_profile from "../assets/default_profile.jpeg";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("bird_app_user"));
    const { getPostByAuthor, authorPost } = useAuth();
    const { id } = useParams();
    console.log(authorPost);
    useEffect(() => {
        getPostByAuthor(id);
    }, []);
    return (
        <section className="dashboard">
            {authorPost.length ? (
                <div className="container dashboard__container">
                    {authorPost.map(({ _id, title }) => {
                        return (
                            <article key={_id} className="dashboard__post">
                                <div className="dashboard__post-info">
                                    <div className="dashboard__post-thumbnail">
                                        <img
                                            src={
                                                user.avatar
                                                    ? `${process.env.REACT_APP_UPLOADS_URL}/${user.avatar}`
                                                    : default_profile
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <h5>{title}</h5>
                                </div>
                                <div className="dashboard__post-actions">
                                    <Link
                                        to={`/posts/${_id}`}
                                        className="btn sm"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        to={`/posts/${_id}/edit`}
                                        className="btn sm primary"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/posts/${_id}/delete`}
                                        className="btn sm danger"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <h2 className="center">You have no posts yet </h2>
            )}
        </section>
    );
};

export default Dashboard;
