import React from 'react'
import Article_Card_1 from './Article_Card_1/Article_Card_1'
import Article_Card_2 from './Article_Card_2/Article_Card_2'
import Article_Card_3 from './Article_Card_3/Article_Card_3'
import Article_Card_4 from './Article_Card_4/Article_Card_4'
import { Colors } from '../constants/Color'
import Card_Name_link1 from './Card_Name_link/Card_Name_link1/Card_Name_link1'
import Button from '../Button/Button'
import Card_Name_link2 from './Card_Name_link/Card_Name_link2/Card_Name_link2'
import Card_Name_link3 from './Card_Name_link/Card_Name_link3/Card_Name_link3'
import Card_Name_link4 from './Card_Name_link/Card_Name_link4/Card_Name_link4'

const All_Article_Card = () => {

    const All_ArticleStyle = {
        backgroundColor: Colors.white
    }

    return (
        <>
            <div className="all_article_card    pt-10 pb-10      md:mt-20      " 
            style={All_ArticleStyle}>
                <Card_Name_link1/>
                <Article_Card_1/>
                <Card_Name_link2/>
                <Article_Card_2/>
                <Card_Name_link3/>
                <Article_Card_3/>
                <Card_Name_link4/>
                <Article_Card_4/>
                <Button />
            </div>
        </>
    )
}

export default All_Article_Card
