import React from "react";
import { FontWeight } from "../../../constants/Fonts";

const Category_Card = ({ imgLink, cardTitle }) => {
  const CardTitleStyle = {
    fontWeight: FontWeight.Heading1,
  };

  return (
    <>
      <div className="card_category inline-flex  items-end justify-center h-73 max-md:my-5 ">
        <div className="sub_category rounded-lg  h-60  flex items-center w-40 mx-2.5 max-lg:w-32  max-lg:h-52 hover:bg-sky-400 hover:text-white bg-white max-md:h-73  max-md:w-60 max-sm:h-78     ">
          <div className="img_title  inline-flex flex-col items-start gap-7  ml-8 ">
            <div className="img_div w-10 h-10 max-lg:w-6 max-lg:h-6 flex justify-center items-center  bg-white rounded-lg  max-md:w-16 max-md:h-16  ">
              <img
                src={imgLink}
                className="card_img  w-7 h-7 max-lg:w-6 max-lg:h-6  max-md:w-10 max-md:h-10 "
              />
            </div>
            <div
              className="card_title max-lg:text-sm  max-md:text-xl not-italic leading-normal  capitalize  "
              style={CardTitleStyle}
            >
              {cardTitle}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_Card;
