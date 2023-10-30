import React from 'react';
import Heading_Container from './BlogHeading_Container/BlogHeading_Container';
import Container_image from './BlogContainer_image/BlogContainer_image';

const BlogHeading_image = () => {
    return (
        <>
            <div className="heading_image  flex justify-center sm:container  mx-auto px-4 md:container md:mx-auto  gap-28  max-lg:gap-20 max-md:gap-14 sm:mt-24 sm:mb-24  max-sm:p-0   max-sm:flex-col-reverse  ">
                <Heading_Container />
                <Container_image />
            </div>
        </>
    )
}

export default BlogHeading_image;
