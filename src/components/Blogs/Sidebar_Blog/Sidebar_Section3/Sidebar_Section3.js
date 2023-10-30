import React from 'react'
import Section3_Heading from './Section3_Heading'
import Sidebar_InputBar from './Sidebar_InputBar/Sidebar_InputBar'
import Sidebar_Button1 from './Sidebar_Button1/Sidebar_Button1'

const Sidebar_Section3 = () => {
    return (
        <>
            <div className="sidebar_section3  flex flex-col gap-4 items-start self-stretch max-sm:hidden  ">
                <Section3_Heading />
                <Sidebar_InputBar />
                <Sidebar_Button1 />
            </div>
        </>
    )
}

export default Sidebar_Section3
