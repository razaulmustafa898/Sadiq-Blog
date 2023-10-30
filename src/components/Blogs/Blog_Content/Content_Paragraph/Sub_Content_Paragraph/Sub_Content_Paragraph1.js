import React from 'react'
import Sub_Content_Paragraph from './Sub_Content_Paragraph';

const Sub_Content_Paragraph1 = () => {
    return (
        <>
            <div className="sub_content_paragraph flex justify-center items-center pb-12">
                <div className="sub_content_paragraph_link mr-2 ">
                    <img src="./images/hyperlink.png" className=" w-4 h-4" />
                </div>
                <Sub_Content_Paragraph />
            </div>
        </>
    )
}

export default Sub_Content_Paragraph1;