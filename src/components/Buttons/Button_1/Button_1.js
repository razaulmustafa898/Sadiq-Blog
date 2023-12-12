import React from "react";
import { Colors } from "../../../constants/Color";
import { FontWeight } from "../../../constants/Fonts";
import { Link } from "react-router-dom";

const Button_1 = ({ buttonName, buttonLink, buttonsStyling }) => {
  const ButtonStyle = {
    backgroundColor: Colors.Blue,
    color: Colors.white,
    fontWeight: FontWeight["Sub Heading2"],
  };

  return (
    <>
      <div className="nav_button_one max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-end max-sm:h-12">
        <Link
          to={buttonLink}
          className="button_text text-lg capitalize max-xl:text-sm max-lg:text-xs "
        >
          <button
            style={ButtonStyle}
            className={
              buttonsStyling
                ? `nav_button flex  justify-center rounded py-2.5 items-center text-lg max-md:text-base select-none `
                : `${`flex  justify-center rounded py-2.5 items-center text-lg max-lg:text-base max-md:text-sm px-3 select-none`}`
            }
          >
            {buttonName}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button_1;
