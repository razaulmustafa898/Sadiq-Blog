import React from 'react';
import { Colors } from '../../../../constants/Color';
import { FontWeight } from '../../../../constants/Fonts';

const ArticleHeading_Section = () => {

    const ArticleSubheadingSection = {
        color: Colors.Blue,
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    }

    const ArticleheadingSection = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold']
    }

    return (
        <>
            <div className="article_heading_section flex  flex-col items-center gap-8 ">
                <div className="sub_article_heading_section flex flex-col  items-center gap-5      ">
                    <div className="article_section_heading_subheading flex flex-col items-center gap-3    ">
                        <div className="article_section_subheading text-center text-base not-italic
                     leading-6   " style={ArticleSubheadingSection}>Latest posts</div>
                        <div className="article_section_heading text-4xl not-italic leading-10 text-center tracking-tight  " style={ArticleheadingSection}>Untitled blog</div>
                    </div>
                    <div className="article_section_supporting_text text-center text-xl not-italic    ">
                        Interviews, tips, guides, industry best practices, and news.
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleHeading_Section;