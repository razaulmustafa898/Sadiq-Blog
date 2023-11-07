import React from 'react'
import Blog_Contributer_Profile1 from './Blog_Contributer_Profile1/Blog_Contributer_Profile1'
import Blog_Contributer_Profile2 from './Blog_Contributer_Profile2/Blog_Contributer_Profile2'
import Blog_Contributer_Profile3 from './Blog_Contributer_Profile3/Blog_Contributer_Profile3'

const Blog_Contributer_AllProfile = () => {
    return (
        <>
            <div className="blog_contributor_allprofile flex flex-col  justify-center items-start   gap-6  self-stretch ">
                <Blog_Contributer_Profile1 />
                <Blog_Contributer_Profile2 />
                <Blog_Contributer_Profile3 />
            </div>
        </>
    )
}

export default Blog_Contributer_AllProfile;