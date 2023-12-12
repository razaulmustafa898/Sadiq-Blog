import React from "react";
import { Colors } from "../../../constants/Color";

const Category_Heading = ({ categoryTitle }) => {
  const categoryHeadingTitle = {
    color: Colors.Blue,
  };
  return (
    <>
      <div className="category-heading flex-col flex my-16 ">
        <div className="sub-category-heading flex flex-col gap-3">
          <div
            className="category-heading-title text-base text-center not-italic font-semibold leading-6"
            style={categoryHeadingTitle}
          >
            {categoryTitle}
          </div>
          <div className="category-heading-title-main text-center not-italic font-semibold text-5xl leading-60 tracking-letter_tight_spacer ">
            We do things differently...
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_Heading;
