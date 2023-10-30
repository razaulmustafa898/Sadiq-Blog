import React from 'react';
import Section2_Heading from './Section2_Heading/Section2_Heading';
import Section2_AllProfile from './Section2_AllProfile';

const Sidebar_Section2 = () => {
    return (
        <>
            <div className="sidebar_section2  flex flex-col  items-start  self-stretch  gap-6 " >
                <Section2_Heading />
                <Section2_AllProfile />
            </div>
        </>
    )
}

export default Sidebar_Section2;