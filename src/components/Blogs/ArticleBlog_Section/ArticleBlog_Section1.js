import React from "react";
import { BlogSummary } from "../../../constants/DummyData";
import Article_Card_1_1 from "../../Article-Card/Article_Card_1/Article-Card-1_1/Article_Card_1_1";

const ArticleBlog_Section1 = () => {
  return (
    <>
    <div className=" flex">
      {BlogSummary.slice(0, 3).map((blogcategory) => (
        <Article_Card_1_1
          key={blogcategory.id}
          id={blogcategory.id}
          name={blogcategory.name}
          image={blogcategory.image}
        />
      ))}
      </div>
    </>
  );
};

export default ArticleBlog_Section1;
