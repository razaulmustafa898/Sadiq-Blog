import React from 'react'
import Sub_Content_Paragraph3 from './Sub_Content_Paragraph3';

const Sub_SubContent_Paragraph = () => {
    return (
        <>
            <div className="sub_subcontent_paragraph flex justify-center items-center pb-12">
                <div className="sub_subcontent_paragraph_link mr-2">
                    <img src="./images/hyperlink.png" className=" w-4 h-4" />
                </div>
                <Sub_Content_Paragraph3 />
            </div>
        </>
    )
}

export default Sub_SubContent_Paragraph;