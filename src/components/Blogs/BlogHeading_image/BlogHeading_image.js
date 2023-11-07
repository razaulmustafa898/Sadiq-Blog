import React from 'react';
import Heading_Container from './BlogHeading_Container/BlogHeading_Container';
import Container_image from './BlogContainer_image/BlogContainer_image';

const BlogHeading_image = () => {
    return (
        <>
            <div className="blogheading_image  flex justify-center sm:container  mx-auto px-4 md:container md:mx-auto  gap-28e  max-lg:gap-20e max-md:gap-14e sm:mt-24 mb-14  max-sm:p-0   max-sm:flex-col-reverse  ">
                <Heading_Container />
                {/* <Container_image /> */}
            </div>
        </>
    )
}

export default BlogHeading_image;
