import React from 'react';
import Blog_Contributer_ProfileImage1 from './Blog_Contributer_ProfileImage/Blog_Contributer_ProfileImage1';
import Blog_Contributer_Profile_FeildName from '../Blog_Contributer_Profile1/Blog_Contributer_FeildName1';

const Blog_Contributer_Profile1 = () => {
    return (
        <>
            <div className="blog_contributer_Profile1  flex items-center gap-3    ">
                <Blog_Contributer_ProfileImage1 />
                <Blog_Contributer_Profile_FeildName />
            </div>
        </>
    )
}

export default Blog_Contributer_Profile1;