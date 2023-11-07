import React from 'react';
import Blog_Contributer_FeildName from './Blog_ContributerProfile_FeildName';
import Blog_Contributer_ProfileImage2 from './Blog_Contributer_ProfileImage/Blog_Contributer_ProfileImage2';

const Blog_Contributer_Profile2 = () => {
    return (
        <>
            <div className="section2_Profile  flex items-center gap-3    ">
                <Blog_Contributer_ProfileImage2 />
                <Blog_Contributer_FeildName />
            </div>
        </>
    )
}

export default Blog_Contributer_Profile2;