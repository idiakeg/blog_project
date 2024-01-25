import { Link } from "react-router-dom";
import { dummyPost } from "../data";

const Dashboard = () => {
  return (
    <section className="dashboard">
      {dummyPost.length ? (
        <div className="container dashboard__container">
          {dummyPost.map((post) => {
            return (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post.id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${post.id}/delete`}
                    className="btn sm danger"
                  >
                    Danger
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
