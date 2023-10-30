import React from 'react'

const Sub_Content_Paragraph2 = (props) => {
    return (
        <>
            <div className="sub_content_paragraph_1  flex  ">
                {props.SubContentParagraph}
                <a target='_blank' href={props.SubContentLink}>
                    <div className="sub_content_paragraphsub1 underline  max-sm:m-0 ml-1 hover:text-sky-500"> Pexels
                    </div>
                </a>
            </div>
        </>
    )
}

export default Sub_Content_Paragraph2;