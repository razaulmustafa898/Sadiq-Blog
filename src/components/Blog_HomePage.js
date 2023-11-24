import React from "react";
import NavBar from "./NavBar/NavBar";
import Heading_image from "./Heading_image/Heading_image";
import Scroll_Down from "./Scroll_Down/Scroll_Down";
import Card_Container_one from "./Card_Container_one/Card_Container_one";
import All_Article_Card from "./Article-Card/All_Article_Card";
import Subscribe_Section from "./Subscribe_Section/Subscribe_Section";
import Footer from "./Footer/Footer";

const Blog_HomePage = () => {
  return (
    <>
      <div className="blog_homepage">
        <NavBar />
        <Heading_image />
        <Scroll_Down />
        <Card_Container_one />
        <All_Article_Card />
        <Subscribe_Section />
        <Footer />
      </div>
    </>
  );
};

export default Blog_HomePage;
