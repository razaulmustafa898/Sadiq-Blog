import React from 'react'
import Content_Paragraph_Quotes from './Content_Paragraph_Quotes/Content_Paragraph_Quotes';
import Content_Profile from './Content_Profile/Content_Profile';

const Content_Quotes = () => {
    return (
        <>
            <div className="content_quotes pb-12 pt-12 flex flex-col items-start self-stretch  ">
                <div className="sub_content_quotes flex flex-col items-start gap-8 self-stretch  ">
                    <Content_Paragraph_Quotes />
                    <Content_Profile />
                </div>
            </div>
        </>
    )
}

export default Content_Quotes;