import React from 'react';
import ArticleHeading_Section from './ArticleHeading_Section/ArticleHeading_Section';
import Button from '../../Button/Button';
import ArticleBlog_Section1 from './ArticleBlog_Section1';

const ArticleBlog_Section = () => {
    return (
        <>
            <div className="article_blog_section container flex flex-col items-center gap-16 py-24 ">
                <div className="sub_article_blog_section">
                    <ArticleHeading_Section />
                    <ArticleBlog_Section1 />
                    <Button />
                </div>
            </div>
        </>
    )
}

export default ArticleBlog_Section;