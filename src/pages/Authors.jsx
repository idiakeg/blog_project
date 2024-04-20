import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import default_profile from "../assets/default_profile.jpeg";
import Loading from "../components/Loading/Loading";

const Authors = () => {
    const { getAllAuthors, authors, isLoading } = useAuth();

    useEffect(() => {
        getAllAuthors();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="authors">
                    {authors.length > 0 ? (
                        <div className="container authors__container">
                            {authors.map(
                                ({ _id, avatar, name, no_of_posts }) => {
                                    return (
                                        <Link
                                            key={_id}
                                            to={`/post/users/${_id}`}
                                            className="author"
                                        >
                                            <div className="author__avatar">
                                                <img
                                                    src={
                                                        avatar
                                                            ? `${process.env.REACT_APP_UPLOADS_URL}/${avatar}`
                                                            : default_profile
                                                    }
                                                    alt={`name of ${name}`}
                                                />
                                            </div>
                                            <div className="author__info">
                                                <h4>{name}</h4>
                                                <p>{no_of_posts}</p>
                                            </div>
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    ) : (
                        <h2 className="center">No authors found</h2>
                    )}
                </section>
            )}
        </>
    );
};

export default Authors;
