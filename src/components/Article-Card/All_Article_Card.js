import React from "react";
import { Colors } from "../../constants/Color";
import Button from "../Button/Button";
import Article_Card_1 from "./Article_Card_1/Article_Card_1";

const All_Article_Card = () => {
  const All_ArticleStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <>
      <div
        className="all_article_card pb-20 md:mt-20 "
        style={All_ArticleStyle}
      >
        <Article_Card_1 />
        <Button />
      </div>
    </>
  );
};

export default All_Article_Card;
