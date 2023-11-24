import React from "react";
import All_Blog_Cards from "./All_Blog_Cards/All_Blog_Cards";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Subscribe_Section from "../Subscribe_Section/Subscribe_Section";
import Category_Heading from "./Category_Heading/Category_Heading";

const Category = () => {
  return (
    <>
      <div className="category">
        <div className="sub_category">
          <NavBar />
          <Category_Heading />
          <All_Blog_Cards />
          <Subscribe_Section />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Category;
