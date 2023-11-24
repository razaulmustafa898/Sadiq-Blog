import React from "react";
import NavBar from "../../NavBar/NavBar.js";
import Category_Heading from "../Category_Heading/Category_Heading.js";
import Subscribe_Section from "../../Subscribe_Section/Subscribe_Section.js";
import Footer from "../../Footer/Footer.js";
import { Colors } from "../../../constants/Color.js";
import { BlogSummary } from "../../../constants/DummyData";
import Article_Card_1_1 from "../../Article-Card/Article_Card_1/Article-Card-1_1/Article_Card_1_1";
import { useParams } from "react-router-dom";

const Sub_Category = () => {
  const cssStyle = {
    backgroundColor: Colors.white,
  };
  const { id } = useParams();
  console.log("id", id, typeof id);
  console.log(id);

  return (
    <>
      <div className="sub_category">
        <NavBar />
        <Category_Heading />
        <div className=" pb-10" style={cssStyle}>
          <div className="all_article_card pb-10 md:mt-20">
            <div className="articl_card_1_container pb-10">
              <div className="article_card_1 flex justify-center items-center mb-20 2xl:container 2xl:mx-auto max-xl:flex-wrap max-md:grid flex-wrap">
                {BlogSummary.filter((blog) => blog.category_id === id).map(
                  (blogcategory) => (
                    <Article_Card_1_1
                      key={blogcategory.id}
                      id={blogcategory.id}
                      name={blogcategory.name}
                      image={blogcategory.image}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <Subscribe_Section />
        <Footer />
      </div>
    </>
  );
};

export default Sub_Category;
