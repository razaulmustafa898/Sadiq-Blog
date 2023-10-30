import React from 'react';

const Blog_Badge = () => {
    return (
        <>
            <div className="blog_badge      "  >
                <div className="blog_badge_container  w-40  py-1 gap-2  border border-gray-400 flex justify-center items-center  rounded-xl ">
                    <div className="badge_product flex border rounded-md border-gray-400 gap-1 justify-center items-center  p-1">
                        <div className="badge_spot bg-sky-200   w-3.5 h-3.5   flex justify-center items-center rounded-3xl    " >
                            <div className="badge_subspot   bg-sky-500 w-2 h-2 rounded-3xl   " ></div>
                        </div>
                        <div className="badge_text1 text-xs ">Product</div>
                    </div>
                    <div className="badge_time  p-1  ">
                        <div className="badge_text1     text-xs  ">8 min read</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_Badge;