import React from 'react'
import Blog_Index_Heading from './Blog_Index_Heading/Blog_Index_Heading';
import Blog_Index_Content from './Blog_Index_Content/Blog_Index_Content';

const Blog_Index = () => {
    return (
        <>
            <div className="sidebar_section1  container   flex  flex-col  justify-center items-center  self-stretch gap-4   sm:mb-14  ">
                    <Blog_Index_Heading />
                    <Blog_Index_Content />
            </div>
        </>
    )
}

export default Blog_Index;