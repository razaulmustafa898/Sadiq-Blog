import React from 'react';
import { Colors } from '../../constants/Color';

const Article_Row = () => {

    const ArticleRowStyle = {
        backgroundColor: Colors['Light Grey 2'],
    }

    return (
        <>
            <div className="article_row container">
                <div className="sub_article_row h-0.5" style={ArticleRowStyle}></div>
            </div>
        </>
    )
}

export default Article_Row;