import React from 'react'
import { FontWeight } from '../../../../constants/Fonts';

const Content_Paragraph_Quotes = () => {

    const ContentParagraphQuotes = {
        fontWeight: FontWeight['Paragraph 5']
    }

    return (
        <>
            <div className="content_paragraph_quotes text-2xl italic leading-9   " style={ContentParagraphQuotes}>
            “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
            </div>
        </>
    )
}

export default Content_Paragraph_Quotes;