import React from "react";
import NavBar from "../NavBar/NavBar";
import Category_Heading from "../Category/Category_Heading/Category_Heading";
import All_Blog_Cards from "../Category/All_Blog_Cards/All_Blog_Cards";
import Subscribe_Section from "../Subscribe_Section/Subscribe_Section";
import Footer from "../Footer/Footer";

const More_Article = () => {
  return (
    <>
      <div>
        <NavBar />
        <Category_Heading />
        <All_Blog_Cards />
        <Subscribe_Section />
        <Footer />
      </div>
    </>
  );
};

export default More_Article;
