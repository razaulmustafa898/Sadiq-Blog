import React from 'react'
import Content_Paragraph1 from './Content_Paragraph/Content_Paragraph1'
import Content_Heading1 from './Content_Heading/Content_Heading1'
import Content_Paragraph2 from './Content_Paragraph/Content_Paragraph2'
import Content_Image1 from './Content_Image/Content_Image1'
import Sub_Content_Paragraph1 from './Content_Paragraph/Sub_Content_Paragraph/Sub_Content_Paragraph1'
import Content_Paragraph3 from './Content_Paragraph/Content_Paragraph3'
import Content_Quotes from './Content_Quotes/Content_Quotes'
import Content_Paragraph4 from './Content_Paragraph/Content_Paragraph4'
import Content_Heading2 from './Content_Heading/Content_Heading2'
import Content_Paragraph5 from './Content_Paragraph/Content_Paragraph5'
import Content_Heading3 from './Content_Heading/Content_Heading3'
import Content_Paragraph6 from './Content_Paragraph/Content_Paragraph6'
import Content_Image2 from './Content_Image/Content_Image2'
import Sub_Content_Paragraph3 from './Content_Paragraph/Sub_Content_Paragraph/Sub_Content_Paragraph3/Sub_Content_Paragraph3'
import Content_Paragraph7 from './Content_Paragraph/Content_Paragraph7'
import Content_Conclusion from './Content_Paragraph/Content_Conclusion/Content_Conclusion'
import RichTextViewer from '../RichTextViewer/RichTextViewer'

class Blog_Content extends React.Component {


    render() {
        return (
            <>
                <div className="blog_content  flex flex-col  items-start  gap-5 max-md:px-4  max-sm:mt-16     ">
                    <Content_Paragraph1 />
                    <Content_Heading1 />
                    <Content_Paragraph2 />
                    <Content_Image1 />
                    <Sub_Content_Paragraph1 />
                    <Content_Paragraph3 />
                    <Content_Quotes />
                    <Content_Paragraph4 />
                    <Content_Heading2 />
                    <Content_Paragraph5 />
                    <Content_Heading3 />
                    <Content_Paragraph6 />
                    <Content_Image2 />
                    <Sub_Content_Paragraph3 />
                    <Content_Paragraph7 />
                    <Content_Conclusion />
                </div>
            </>
        )
    }
}

export default Blog_Content;