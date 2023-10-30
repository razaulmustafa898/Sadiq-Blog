import React from 'react';
import Heading from '../BlogHeading_one/BlogHeading';
import BlogSubheading_one from '../BlogSubheading_one/BlogSubheading_one';
import Blog_Badge from '../Blog_Badge/Blog_Badge';

const BlogHeading_Container = () => {
    return (
        <>
            <div className="heading_container inline-flex flex-col gap-7 
                 h-105 justify-center max-2xl:w-2/4 max-sm:w-full max-sm:px-4   ">
                <Blog_Badge />
                <Heading />
                <BlogSubheading_one />
            </div>
        </>
    )
}

export default BlogHeading_Container;