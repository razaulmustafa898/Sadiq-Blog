import React from 'react'
import { Colors } from '../../../../../constants/Color';
import Content_Heading4 from '../../Content_Heading/Content_Heading4';
import Content_Paragraph8 from '../Content_Paragraph8';

const Content_Conclusion = () => {

    const ContentConclusion = {
        backgroundColor: Colors['Light Grey 2']
    }

    return (
        <>
            <div className="content_conclusion flex flex-col items-start rounded-2xl p-8 w-full  "
                style={ContentConclusion}>
                <div className="content_conclusion_heading">
                    <Content_Heading4 />
                </div>
                <div className="content_conclusion_paragraph flex flex-col gap-3.5">
                    <Content_Paragraph8 />
                </div>
            </div>
        </>
    )
}

export default Content_Conclusion;