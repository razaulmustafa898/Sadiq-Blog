import React from "react";
import Button from "./Button/Button";
import Input_Bar from "../../../Heading_image/Search_Bar/input_Bar/Input_Bar";

const Search_Bar = () => {
  return (
    <>
      <div className="search_button flex items-start gap-5 max-lg:gap-3 max-md:gap-1.5  emax-sm:absolute  max-sm:top-fulls ">
        <Input_Bar />
        <Button />
      </div>
    </>
  );
};

export default Search_Bar;
