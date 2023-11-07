import React from 'react';
import Sidebar_Blog from '../Sidebar_Blog/Sidebar_Blog'
import Blog_Content from '../Blog_Content/Blog_Content';
import RichText from '../HTMLRichText/RichText';

const Blog_Container = () => {
    return (
        <>
            <div className="blog_container sm:container  md:mx-auto  flex gap-16 max-sm:flex-col-reverse max-lg:gap-12 max-md:gap-9  pb-24   3xl:max-w-swy ">
                <Sidebar_Blog />
                {/* <RichText /> */}
                <Blog_Content />
            </div>
        </>
    )
}

export default Blog_Container;