import React from 'react'
import Content_Paragraph from './Content_Paragraph';
import RichTextViewer from '../../RichTextViewer/RichTextViewer';

const Content_Paragraph7 = () => {
    return (
        <>
            <div className="content_paragraph7 pt-8 pb-12 flex flex-col gap-4">

                <RichTextViewer contentParagraph="Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at." />

                <RichTextViewer contentParagraph="Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum." />

            </div>
        </>
    )
}

export default Content_Paragraph7;