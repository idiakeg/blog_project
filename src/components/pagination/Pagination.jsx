import React from "react";
import "./pagination.css";

const Pagination = ({ totalPosts, nextPage, pageNo }) => {
    const number_of_pages = Math.ceil(totalPosts / 6); // 6 is the limit set by the server, only 6 posts are obtain per request.

    const handlePrev = () => {
        if (+pageNo !== 1) {
            nextPage(+pageNo - 1);
        }
    };

    const handleNext = () => {
        if (+pageNo * 6 < totalPosts) {
            nextPage(+pageNo + 1);
        }
    };
    return (
        <div className="container">
            <div className="pagination_container">
                <button disabled={+pageNo === 1} onClick={handlePrev}>
                    Prev
                </button>
                {Array.from({ length: number_of_pages }).map((_, index) => (
                    <button
                        className={
                            +pageNo === index + 1 ? "active_page_btn" : ""
                        }
                        disabled={+pageNo === index + 1}
                        key={index}
                        onClick={() => nextPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    disabled={+pageNo * 6 > totalPosts}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
