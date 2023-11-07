import React from 'react'
import Blog_Contributer_ProfileFeild1 from './Blog_Contributer_ProfileFeild/Blog_Contributer_ProfileFeild1';
import Blog_Contributer_ProfileName1 from './Blog_Contributer_ProfileName/Blog_Contributer_ProfileName1';

const Blog_Contributer_Profile_FeildName = () => {
    return (
        <>
            <div className="profile_feildname  flex flex-col items-start  gap-1 ">
                <Blog_Contributer_ProfileName1 />
                <Blog_Contributer_ProfileFeild1 />
            </div>
        </>
    )
}

export default Blog_Contributer_Profile_FeildName;