import React from 'react';
import Sidebar_Blog from '../Sidebar_Blog/Sidebar_Blog'
import MyText from '../MyText/MyText';

const Blog_Container = () => {
    return (
        <>
            <div className="blog_container sm:container  md:mx-auto  flex gap-16 max-sm:flex-col-reverse max-lg:gap-12 max-md:gap-9  pb-24 3xl:max-w-swy sm:mt-24 ">
                <Sidebar_Blog />
                <MyText />
            </div>
        </>
    )
}

export default Blog_Container;