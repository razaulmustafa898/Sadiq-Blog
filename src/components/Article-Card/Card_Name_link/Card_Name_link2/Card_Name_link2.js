import React from "react";
import { category } from "../../../../constants/DummyData";
import Card_Name_link1 from "../Card_Name_link1/Card_Name_link1";

const Card_Name_link2 = () => {
  return (
    <>
      {category.map((all_cards_links) => (
        <Card_Name_link1
          key={all_cards_links.id}
          id={all_cards_links.id}
          name={all_cards_links.name}
          link_name={all_cards_links.link_name}
        />
      ))}
    </>
  );
};

export default Card_Name_link2;
