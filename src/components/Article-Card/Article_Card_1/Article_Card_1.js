import React from "react";
import Article_Card_1_1 from "./Article-Card-1_1/Article_Card_1_1";
import { BlogSummary, category } from "../../../constants/DummyData";
import Card_Name_link1 from "../Card_Name_link/Card_Name_link1/Card_Name_link1";

const Article_Card_1 = () => {
  return (
    <>
      <div className="articl_card_1 ">
        <div className="flex justify-center items-center  mb-20 2xl:container 2xl:mx-auto max-xl:flex-wrap max-md:grid  flex-wrap  ">
          {category.slice(0, 1).map((all_cards_links1) => (
            <Card_Name_link1
              key={all_cards_links1.key}
              id={all_cards_links1.id}
              name={all_cards_links1.name}
              link_name={all_cards_links1.link_name}
            />
          ))}
          {BlogSummary.filter((blog) => blog.category_id == "js")
            .slice(0, 3)
            .map((blogcategory1) => (
              <Article_Card_1_1
                key={blogcategory1.key}
                id={blogcategory1.id}
                name={blogcategory1.name}
                image={blogcategory1.image}
              />
            ))}

          {category.slice(1, 2).map((all_cards_links2) => (
            <Card_Name_link1
              key={all_cards_links2.key}
              id={all_cards_links2.id}
              name={all_cards_links2.name}
              link_name={all_cards_links2.link_name}
            />
          ))}
          {BlogSummary.filter((blog) => blog.category_id == "css")
            .slice(0, 3)
            .map((blogcategory2) => (
              <Article_Card_1_1
                key={blogcategory2.key}
                id={blogcategory2.id}
                name={blogcategory2.name}
                image={blogcategory2.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Article_Card_1;
