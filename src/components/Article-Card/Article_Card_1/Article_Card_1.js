import React from 'react';
import Article_Card_1_1 from './Article-Card-1_1/Article_Card_1_1';
import Article_Card_1_2 from './Article-Card-1_2/Article_Card_1_2';
import Article_Card_1_3 from './Article-Card-1_3/Article-Card-1_3';
import Article_Card_1_4 from './Article_Card_1_4/Article_Card_1_4';

const Article_Card_1 = () => {
    return (
        <>
            <div className="articl_card_1_container       ">
                <div className="article_card_1  flex justify-center     items-center my-10 mb-20    2xl:container 2xl:mx-auto  max-xl:flex-wrap   max-md:grid      ">
                    <Article_Card_1_1 />
                    <Article_Card_1_2 />
                    <Article_Card_1_3 />
                    <div className="article_card_1_4   max-xl:w-107   max-xl:flex  xl:justify-center max-fl:w-80  ">
                        <Article_Card_1_4 />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Article_Card_1
