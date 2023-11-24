import React from 'react';
import BlogHeading_Container from './BlogHeading_Container/BlogHeading_Container';
import BlogContainer_image from './BlogContainer_image/BlogContainer_image';

const BlogHeading_image = () => {
    return (
        <>
            <div className="blogheading_image flex justify-center sm:container mx-auto px-4 md:container md:mx-auto sm:mt-5 mb-14 max-sm:p-0 max-sm:flex-col-reverse gap-16 max-xl:gap-10  2xl:max-w-swy  ">
                <BlogHeading_Container />
                <BlogContainer_image />
            </div>
        </>
    )
}

export default BlogHeading_image;
