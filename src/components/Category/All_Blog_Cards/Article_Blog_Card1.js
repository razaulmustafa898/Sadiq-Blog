import React from "react";
import { BlogSummary } from "../../../constants/DummyData";
import Article_Card_1_1 from "../../Article-Card/Article_Card_1/Article-Card-1_1/Article_Card_1_1";

const Article_Blog_Card1 = () => {
  return (
    <>
      <div className="articl_blog_card1  ">
        <div className="article_blog_1 flex justify-center items-center  mb-20 2xl:container 2xl:mx-auto max-xl:flex-wrap max-md:grid  flex-wrap   ">
          {BlogSummary.map((blogcategory) => (
            <Article_Card_1_1
              key={blogcategory.id}
              id={blogcategory.id}
              name={blogcategory.name}
              image={blogcategory.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Article_Blog_Card1;
