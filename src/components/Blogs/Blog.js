import React from 'react'
import NavBar from '../NavBar/NavBar';
import BlogHeading_image from './BlogHeading_image/BlogHeading_image';
import Blog_Container from './Blog_Container/Blog_Container';
import ArticleBlog_Section from './ArticleBlog_Section/ArticleBlog_Section';
import Article_Row from './Article_Row/Article_Row';
import CTA_Section from './CTA_Section/CTA_Section';
import Subscribe_Section from '../Subscribe_Section/Subscribe_Section';
import Footer from '../Footer/Footer';

import '../../App.css'

const Blog = () => {
    return (
        <>
            <NavBar />
            <BlogHeading_image />
            <Blog_Container />
            <Article_Row />
            <ArticleBlog_Section />
            <Article_Row />
            <CTA_Section />
            <Subscribe_Section />
            <Footer />
        </>
    )
}

export default Blog;