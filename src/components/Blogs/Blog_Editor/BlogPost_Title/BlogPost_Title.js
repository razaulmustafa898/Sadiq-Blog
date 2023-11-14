import React from 'react'

const BlogPost_Title = ({ postTitle }) => {
    return (
        <>
            <div className="blog_post_title">
            <label htmlFor="title">{postTitle}</label>
            </div>
        </>
    )
}

export default BlogPost_Title;