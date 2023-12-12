import React from "react";
import { FontWeight } from "../../../constants/Fonts";

const Heading_one = ({ headingOneTitle }) => {
  const HeadingStyle = {
    fontWeight: FontWeight.Heading1,
  };

  return (
    <>
      <div
        className="heading_one text-6xl capitalize leading-normal max-lg:text-5xl max-lg:leading-normal max-md:text-4xl max-md:leading-normal max-sm:text-6xl max-sm:leading-normal  max-gv:text-4xl max-gv:leading-normal"
        style={HeadingStyle}
      >
        {headingOneTitle}
      </div>
    </>
  );
};

export default Heading_one;
