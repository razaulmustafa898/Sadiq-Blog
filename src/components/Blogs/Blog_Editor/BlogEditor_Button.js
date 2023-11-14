import React from 'react'

const BlogEditor_Button = ({ buttonTitle, bgColorStyle }) => {
    return (
        <>
            <div className="blog_editor_button">
                <button className={`ease-in-out duration-300  text-white  px-4 py-2 focus:outline-none select-none max-sm:w-full ${bgColorStyle}`}>{buttonTitle}</button>
            </div>
        </>
    )
}

export default BlogEditor_Button;