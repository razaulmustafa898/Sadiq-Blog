import React from 'react'
import Sidebar_Section1 from './Sidebar_Section1/Sidebar_Section1'
import Sidebar_Section2 from './Sidebar_Section2/Sidebar_Section2'
import Sidebar_Section3 from './Sidebar_Section3/Sidebar_Section3'
import Sidebar_Section4 from './Sidebar_Section4/Sidebar_Section4'
import Blog_Index from '../Blog_Index/Blog_Index'
import Blog_Contributer from '../Blog_Contributer/Blog_Contributer'
import Content_Row from '../Blog_Content/Content_Row/Content_Row'

const Sidebar_Blog = () => {
    return (
        <>
            <div className="sidebar_blog  w-66 flex flex-col   max-md:px-4 "  >
                <div className=" max-sm:hidden"><Content_Row /></div>
                <Sidebar_Section1 />
                <div className=" max-sm:hidden"><Content_Row /></div>
                <Sidebar_Section2 />
                <div className=" max-sm:hidden"><Content_Row /></div>
                <Sidebar_Section3 />
                <div className=" max-sm:hidden"><Content_Row /></div>
                <Sidebar_Section4 />

            </div>
        </>
    )
}

export default Sidebar_Blog
