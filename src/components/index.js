import React from 'react';
import DataNavbar from './NavBar/DataNavbar/DataNavbar';
import Card_Container_one from './Card_Container_one/Card_Container_one';
import Heading_image from './Heading_image/Heading_image'
import All_Article_Card from './Article-Card/All_Article_Card';
import Subscribe_Section from './Subscribe_Section/Subscribe_Section';
import Footer_Container from './Footer_Container/Footer_Container';

const MyComponent = () => {
  return (
    <>
      <div className="main_container1 overflow-hidden   ">
        <DataNavbar />
        <Heading_image />
        <Card_Container_one />
       <All_Article_Card />
        <Subscribe_Section />
       {/* <Footer_Container/> */}

      </div>
    </>
  );
}
export default MyComponent;