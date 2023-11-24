import React from "react";
import Vue_Card from "./Category Card/Vue Card/Vue_Card";
import Card_Name_link from "./Card_Name_link/Card_Name_link";
import { Categories } from "../../constants/DummyData";
import Category_1 from "./Category Card/CSS Card/Category_1";

const Card_Container_one = () => {
  return (
    <>
      <div className="card_container_one  flex  justify-center  items-center w-full  mx-auto px-4  md:mx-auto max-lg:w-fit max-lg:m-0   max-md:mx-auto   emax-sm:relative max-sm:top-96s   max-sm:mt-20    max-sm:px-4 max-sm:mx-auto ml-3/2 max-sm:w-screen     ">
        <div className="card_sub_container w-screen  max-lg:container     ">
          <div className="sub_container_title_one max-lg:flex max-lg:justify-center    ">
            <Card_Name_link />
          </div>
          <div className="sub_card_container_one inline-flex w-full h-64 max-md:h-full items-end  justify-center max-md:blockd max-md:inline-flex max-md:flex-wrap     ">
            {Categories.map((category) => (
              <Category_1
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
            {/* <div className="vue_card max-md:w-full max-sm:w-96  max-md:container">
                <Vue_Card />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Container_one;
