import React from "react";
import { Colors } from "../../constants/Color";
import { Link } from "react-router-dom";

const Pages_Name = ({listTitle, pageLink}) => {
  const pagesStyle = {
    color: Colors.Black,
  };

  return (
    <>
      <li className="capitalize list-none text-xl max-xl:text-lg max-lg:text-sm max-md:text-xs xl:text-2xl ">
        <Link style={pagesStyle} to={pageLink}>
          {listTitle}
        </Link>
      </li>
    </>
  );
};

export default Pages_Name;
