import React from 'react';
import Article_Card_3_1 from './Article-Card-3_1/Article_Card_3_1';
import Article_Card_3_2 from './Article-Card-3_2/Article_Card_3_2';
import Article_Card_3_3 from './Article-Card-3_3/Article_Card_3_3';
import Article_Card_3_4 from './Article_Card_3_4/Article_Card_3_4'

const Article_Card_3 = () => {
    return (
        <>
            <div className="articl_card_3_container       ">
                <div className="article_card_3 flex justify-center     items-center my-10 mb-20    2xl:container 2xl:mx-auto  max-xl:flex-wrap    max-md:grid    ">
                    <Article_Card_3_1 />
                    <Article_Card_3_2 />
                    <Article_Card_3_3 />
                    <div className="article_card_2_4   max-xl:w-107   max-xl:flex  xl:justify-center max-fl:w-80 ">
                        <Article_Card_3_4 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article_Card_3
