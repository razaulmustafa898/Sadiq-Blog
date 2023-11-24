import React from "react";
import Category_Card from "../Category_Card";

const Category_1 = ({ id, image, name }) => {
  return (
    <>
      <Category_Card imgLink={image} cardTitle={name} />
    </>
  );
};

export default Category_1;
