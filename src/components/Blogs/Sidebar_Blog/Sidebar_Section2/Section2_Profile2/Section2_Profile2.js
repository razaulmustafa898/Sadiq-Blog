import React from 'react';
import Profile_FeildName from './Profile_FeildName/Profile_FeildName';
import Section2_ProfileImage2 from './Section2_ProfileImage/Section2_ProfileImage2/Section2_ProfileImage2';

const Section2_Profile2 = () => {
    return (
        <>
            <div className="section2_Profile  flex items-center gap-3    ">
                <Section2_ProfileImage2 />
                <Profile_FeildName />
            </div>
        </>
    )
}

export default Section2_Profile2;