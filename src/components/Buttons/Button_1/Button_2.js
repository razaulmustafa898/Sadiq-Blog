import React from "react";
import Button_1 from "./Button_1";

const Button_2 = ({login}) => {
  return (
    <>
      <Button_1
        buttonName={login?"Write your own blog": "Login"}
        buttonLink={login?"./write-blog": "./login"}
      />
    </>
  );
};

export default Button_2;
