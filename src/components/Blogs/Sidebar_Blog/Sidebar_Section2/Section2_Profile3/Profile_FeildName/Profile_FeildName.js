import React from 'react'
import Section2_ProfileName3 from '../Section2_ProfileName/Section2_ProfileName3';
import Section2_ProfileFeild3 from '../Section2_ProfileFeild/Section2_ProfileFeild3';

const Profile_FeildName = () => {
    return (
        <>
            <div className="profile_feildname  flex flex-col items-start  gap-0 ">
                <Section2_ProfileName3 />
                <Section2_ProfileFeild3 />
            </div>
        </>
    )
}

export default Profile_FeildName;