import React from "react";
import { Link } from 'react-router-dom';

const Logo_Navbar = () => {
  return (
    <>
      <div className="logo inline-flex justify-center items-center max-sm:w-full w-24 h-20 max-lg:w-32    xl:w-32 xl:h-32  ">
        <Link to="/" className="">
          <img
            src="../../../images/logo.svg"
            className="w-16 h-16 lg:w-20 lg:h-20  xl:w-28 xl:h-28      "
          />
        </Link>
      </div>
    </>
  );
};

export default Logo_Navbar;
