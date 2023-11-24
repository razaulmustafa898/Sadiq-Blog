import React from "react";
import { Colors } from "../../../constants/Color";
import Article_Blog_Card1 from "./Article_Blog_Card1";

const All_Blog_Cards = () => {
  const All_Blog_Style = {
    backgroundColor: Colors.white,
  };
  return (
    <>
      <div className="all_blog_cards pb-10  " style={All_Blog_Style}>
        <Article_Blog_Card1 />
      </div>
    </>
  );
};

export default All_Blog_Cards;
