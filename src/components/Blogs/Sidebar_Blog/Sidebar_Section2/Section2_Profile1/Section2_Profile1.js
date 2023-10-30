import React from 'react';
import Section2_ProfileImage1 from './Section2_ProfileImage/Section2_ProfileImage1/Section2_ProfileImage1';
import Profile_FeildName from './Profile_FeildName/Profile_FeildName';

const Section2_Profile1 = () => {
    return (
        <>
            <div className="section2_Profile  flex items-center gap-3    ">
                <Section2_ProfileImage1 />
                <Profile_FeildName />
            </div>
        </>
    )
}

export default Section2_Profile1;