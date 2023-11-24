import React from 'react'
import Section1_Heading from './Section1_Heading/Section1_Heading';
import SubSection1_Content from './Section1_Content/SubSection1_Content/SubSection1_Content';

const Sidebar_Section1 = () => {
    return (
        <>
            <div className="sidebar_section1 flex flex-col  justify-center items-start self-stretch gap-4  max-sm:hidden  ">
                <div className="sidebar_content_section1 flex flex-col  self-start gap-3"  >
                    <Section1_Heading />
                    <SubSection1_Content />
                </div>
            </div>
        </>
    )
}

export default Sidebar_Section1;