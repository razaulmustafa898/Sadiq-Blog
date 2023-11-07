import React from 'react';
import BlogIndex_Content1 from './BlogIndex_Content1';

const Blog_Index_Content = () => {
    return (
        <>
            <div className="blog_index_content  flex flex-col gap-2  ">
                <BlogIndex_Content1 blogindex_content1="Introduction" />
                <BlogIndex_Content1 blogindex_content1="Software and tools" />
                <BlogIndex_Content1 blogindex_content1="Other resources" />
                <BlogIndex_Content1 blogindex_content1="Conclusion" />
            </div>
        </>
    )
}

export default Blog_Index_Content;