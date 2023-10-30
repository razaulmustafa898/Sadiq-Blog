import React from 'react';
import ArticleHeading_Section from './ArticleHeading_Section/ArticleHeading_Section';
import Article_Card_1 from '../../Article-Card/Article_Card_1/Article_Card_1';
import Button from '../../Button/Button';

const ArticleBlog_Section = () => {
    return (
        <>
            <div className="article_blog_section container flex flex-col items-center gap-16 py-24 ">
                <div className="sub_article_blog_section">
                    <ArticleHeading_Section />
                    <Article_Card_1 />
                    <Button />
                </div>
            </div>
        </>
    )
}

export default ArticleBlog_Section;