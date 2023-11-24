import React from "react";
import { Colors } from "../../constants/Color";
import { FontWeight } from "../../constants/Fonts";
import Logo_Navbar from "../Logo_Navbar/Logo_Navbar";
import DataNavbar from "./DataNavbar/DataNavbar";
import Button_2 from "../Buttons/Button_1/Button_2";

const NavBar = () => {
  const NavBarStyle = {
    backgroundColor: Colors["Light Grey 1"],
    fontWeight: FontWeight["Sub Heading2"],
  };

  return (
    <>
      <div
        className="Navbar w-full shadow-md	 h-24 max-md:h-20  flex justify-center items-center gap-72 max-xl:gap-60 max-lg:gap-32 max-md:gap-20 xl:h-40 xl:gap-80 overflow-hidden	max-sm:h-40 max-sm:block max-sm:w-full  	 "
        style={NavBarStyle}
      >
        <Logo_Navbar />
        <div className="sub_navbar inline-flex  justify-center items-center gap-x-12 max-lg:gap-8 max-md:gap-4 xl:gap-x-16 max-sm:block max-sm:w-full  ">
          <div className="sub2_navbar flex justify-center items-start gap-x-12 max-xl:gap-x-10 max-lg:gap-x-8  max-md:gap-x-5 max-sm:w-full   ">
            <ul className="sub2_navbar flex justify-center items-start gap-x-12 max-xl:gap-x-10 max-lg:gap-x-8 max-md:gap-x-5 xl:gap-x-14  max-sm:w-full   ">
              <DataNavbar />
            </ul>
          </div>
          <Button_2 login={false} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
