import React from 'react';
import Heading from '../BlogHeading_one/BlogHeading';
import BlogSubheading_one from '../BlogSubheading_one/BlogSubheading_one';
import Blog_Badge from '../Blog_Badge/Blog_Badge';
import BlogTitle_Input from '../../BlogTitle_Input/BlogTitle_Input';
import DropDown from '../../BlogTitle_Input/DropDown';

const BlogHeading_Container = () => {
    return (
        <>
            <div className="heading_container inline-flex flex-col gap-7 
                  justify-center  max-sm:w-full max-sm:px-4  max-sm:mt-16      ">
                <Blog_Badge />
                <Heading />
                <BlogSubheading_one />
            </div>
        </>
    )
}

export default BlogHeading_Container;