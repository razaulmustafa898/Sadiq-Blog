import React from 'react'
import Section2_ProfileFeild1 from '../Section2_ProfileFeild/Section2_ProfileFeild1';
import Section2_ProfileName1 from '../Section2_ProfileName/Section2_ProfileName1';

const Profile_FeildName = () => {
    return (
        <>
            <div className="profile_feildname  flex flex-col items-start  gap-0 ">
                <Section2_ProfileName1 />
                <Section2_ProfileFeild1 />
            </div>
        </>
    )
}

export default Profile_FeildName;