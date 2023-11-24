import React from "react";
import { Colors } from "../../constants/Color";
import { FontWeight } from "../../constants/Fonts";
import { Link } from "react-router-dom";

const Button = () => {
  const ButtonStyle = {
    backgroundColor: Colors.Blue,
  };
  const ButtonTextStyle = {
    color: Colors.white,
    fontWeight: FontWeight.Heading1,
  };

  return (
    <>
      <div className="button_container container flex justify-center items-center ">
        <Link to="/category">
          <button
            style={ButtonStyle}
            className="Button flex h-16 pl-6 pr-6 justify-center items-center gap-2 rounded-lg  max-lg:h-10 max-lg:pr-3.5 max-lg:pl-3.5 max-md:h-8 max-md:rounded max-md:pl-2.5 max-md:pr-2.5"
          >
            <div
              className="Button_text1 leading-normal not-italic capitalize text-xl max-lg:text-xs max-md:text-ry "
              style={ButtonTextStyle}
            >
              More Article
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
