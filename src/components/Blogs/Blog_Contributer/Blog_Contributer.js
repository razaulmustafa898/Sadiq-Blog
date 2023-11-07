import React from 'react';
import Blog_Contributer_Heading from './Blog_Contributer_Heading/Blog_Contributer_Heading';
import Blog_Contributer_AllProfile from './Blog_Contributer_AllProfile';


const Blog_Contributer = () => {
    return (
        <>
            <div className="blog_contributor justify-center flex flex-col items-start self-stretch  gap-6  mb-14" >
                <Blog_Contributer_Heading />
                <Blog_Contributer_AllProfile />
            </div>
        </>
    )
}

export default Blog_Contributer;