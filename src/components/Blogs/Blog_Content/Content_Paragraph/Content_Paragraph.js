import React from 'react'

const Content_Paragraph = (props) => {
    return (
        <>
            <div className="content_paragraph ">
                <div className="sub_content_paragraph' text-xl not-italic leading-7  max-lg:text-lg max-md:text-base  "  >
                    {props.contentParagraph}
                </div>
            </div>
        </>
    )
}

export default Content_Paragraph;