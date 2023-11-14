import React from 'react';

const BlogEditor_DropDown1 = ({ dropDown_Name }) => {
    return (
        <>
            <div className="blogeditor_dropdown1">
                <div className="sub_dropdown   px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">{dropDown_Name}</div>
            </div>
        </>
    )
}

export default BlogEditor_DropDown1;