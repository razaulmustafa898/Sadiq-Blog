import React from "react";
import Article_Card from "../../Article_Card";

const Article_Card_1_1 = ({ name, image }) => {
  return (
    <>
      <Article_Card articleImage={image} articleTitle={name} />
    </>
  );
};

export default Article_Card_1_1;
