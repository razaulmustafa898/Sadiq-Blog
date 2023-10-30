import React from 'react'
import Section2_Profile1 from './Section2_Profile1/Section2_Profile1';
import Section2_Profile2 from './Section2_Profile2/Section2_Profile2';
import Section2_Profile3 from './Section2_Profile3/Section2_Profile3';

const Section2_AllProfile = () => {
    return (
        <>
            <div className="section2_allprofile   flex flex-col  items-start gap-6  self-stretch ">
                <Section2_Profile1 />
                <Section2_Profile2 />
                <Section2_Profile3 />
            </div>
        </>
    )
}

export default Section2_AllProfile;