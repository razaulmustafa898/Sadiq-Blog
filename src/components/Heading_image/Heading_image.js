import React from "react";
import Heading_Container from "./Heading_Container/Heading_Container";
import Container_image from "./Container_image/Container_image";

const Heading_image = () => {
  return (
    <>
      <div className="heading_image flex justify-center container mx-auto px-4 md:container md:mx-auto gap-28 max-lg:gap-20 max-md:gap-14 sm:mt-24 sm:mb-24 max-sm:flex-col-reverse ">
        <Heading_Container />
        <Container_image />
      </div>
    </>
  );
};

export default Heading_image;
