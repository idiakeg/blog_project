import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";

const CreatePost = () => {
    const { createPost, isLoading, errorMessage } = useAuth();
    const [postData, setPostData] = useState({
        title: "",
        category: "Uncategorized",
    });

    const [thumbnail, setThumbnail] = useState("");
    const [body, setBody] = useState("");

    const handleInputChange = (e) => {
        setPostData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const token = JSON.parse(localStorage.getItem("bird_app_user_token"));

    const fd = new FormData();
    fd.append("description", body);
    fd.append("title", postData.title);
    fd.append("category", postData.category);
    fd.append("thumbnail", thumbnail);

    const handleSubmit = (e) => {
        e.preventDefault();
        // for (let item of fd) console.log(item);
        createPost(fd, token);
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];

    const postCategories = [
        "Agriculture",
        "Business",
        "Education",
        "Entertainment",
        "Art",
        "Investment",
        "Weather",
        "Uncategorized",
    ];
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="create__post">
                    <div className="container">
                        <h2>Create Post</h2>
                        {errorMessage && (
                            <p className="form__error-message">
                                {errorMessage}
                            </p>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="form create__post-form"
                        >
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={postData.title}
                                onChange={handleInputChange}
                                autoFocus
                            />
                            <select
                                name="category"
                                value={postData.category}
                                onChange={handleInputChange}
                            >
                                {postCategories.map((postCategory, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={postCategory}
                                        >
                                            {postCategory}
                                        </option>
                                    );
                                })}
                            </select>
                            <ReactQuill
                                modules={modules}
                                formats={formats}
                                value={body}
                                onChange={setBody}
                            />
                            <input
                                type="file"
                                name="thumbnail"
                                accept="jpg, png, jpeg"
                                onChange={(e) =>
                                    setThumbnail(e.target.files[0])
                                }
                                // value={postData.thumbnail}
                            />

                            <button type="submit" className="btn primary">
                                Create
                            </button>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
};

export default CreatePost;
