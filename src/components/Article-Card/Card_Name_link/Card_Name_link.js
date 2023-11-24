import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../../constants/Color";
import { FontWeight } from "../../../constants/Fonts";

const Card_Name_link = ({ cards_heading, see_all_cards, links}) => {
  const CardLineStyle = {
    backgroundColor: Colors.Black,
  };

  const CardNameStyle = {
    fontWeight: FontWeight.Heading1,
  };

  const CardLinkStyle = {
    fontWeight: FontWeight.Heading1,
  };

  return (
    <>
      <div className="card_name_link container max-md:container  flex  w-full   justify-center  max-md:w-screen mb-8 mt-20">
        <div className="card_name  w-1/2  flex justify-start items-center max-sm:w-2/3 3xl:w-1/5 ">
          <div
            className="card_name_text  text-xl  max-sm:text-xs "
            style={CardNameStyle}
          >
            {cards_heading}
          </div>
          <div
            className="card_line w-8 h-0.5 ml-2  max-sm:w-4 "
            style={CardLineStyle}
          ></div>
        </div>
        <div className="card_link w-1/2 flex justify-end items-center 3xl:w-1/5 ">
          <Link
            to={links}
            className="see_all_link flex items-center justify-end mr-1"
          >
            <div
              className="card_link_text mr-2 text-xl  max-sm:text-xs "
              style={CardLinkStyle}
            >
              {see_all_cards}
            </div>
            <div className="scroll_right w-2 h-2  origin-center rotate-45  border-t-2 border-r-2 border-black	border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-t-1 max-sm:border-r-1  "></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card_Name_link;
