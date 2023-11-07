import React from 'react';
import DataNavbar from './NavBar/DataNavbar/DataNavbar';
import Card_Container_one from './Card_Container_one/Card_Container_one';
import Heading_image from './Heading_image/Heading_image'
import All_Article_Card from './Article-Card/All_Article_Card';
import Subscribe_Section from './Subscribe_Section/Subscribe_Section';
import Footer from './Footer/Footer'
import Scroll_Down from './Scroll_Down/Scroll_Down';
import Blog from './Blogs/Blog';
import NavBar from './NavBar/NavBar'
import Blogs_NavBar from './Blogs/Blogs_NavBar/Blogs_NavBar';
import '../App.css'

const MyComponent = () => {
  return (
    <>
      <div className="main_container1 overflow-hidden   ">
        {/* <NavBar/>
        <Heading_image />
        <Scroll_Down />
        <Card_Container_one />
        <All_Article_Card />
        <Subscribe_Section />
        <Footer /> */}
        <Blog />
      </div>
    </>
  );
}
export default MyComponent;