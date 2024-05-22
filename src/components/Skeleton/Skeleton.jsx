import "./Skeleton.css";
const Skeleton = () => {
    return (
        <div className="skeleton_container">
            <div className="skeleton_thumbnail"></div>
            <div className="skeleton_title"></div>
            <div className="skeleton_content"></div>
            <div className="skeleton_footer"></div>
        </div>
    );
};

export default Skeleton;
