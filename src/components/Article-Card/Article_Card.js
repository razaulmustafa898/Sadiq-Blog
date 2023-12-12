import React from "react";
import { Colors } from "../../constants/Color";
import { FontWeight } from "../../constants/Fonts";
import Profile from "../Profile_details/Profile";
import "../../App.css";
import { Link } from "react-router-dom";
import Profile_details from "../Profile_details/Profile_details";
import { Author } from "../../constants/DummyData";

const Article_Card = ({ articleImage, articleTitle }) => {
  const article_title = {
    color: Colors.Black,
    fontWeight: FontWeight["Sub Heading2"],
  };

  return (
    <>
      <div className="Article_post_card 3xl:m-0 3xl:p-0 md:flex max-sm:flex flex justify-center items-center max-md:block max-md:m-0 max-md:container my-10    ">
        <div className="sub_articlecard_container1 max-xl:flex max-xl:justify-center max-xl:items-center max-md:mt-10  xl:flex  xl:justify-center xl:items-center w-80 h-85   mx-4  ">
          <Link to="/blog">
            <div className="sub_article_card_container  shadow-md shadow-gray-400  rounded-xl max-xl:rounded-lg w-73 h-75 hover:w-80 hover:h-85 cursor-pointer flex justify-center items-center p-2  ">
              <div className="Sub_Article_Card w-11/12 h-87 flex flex-col gap-5 ">
                <img src={articleImage} className="Article_image w-full" />
                <div className="image_title ">
                  <div className="title_container max-lg:mb-0.5 max-lg:h-16 ">
                    <div
                      style={article_title}
                      className="article_title leading-normal not-italic capitalize text-xl max-xl:text-lg "
                    >
                      {articleTitle}
                    </div>
                  </div>
                </div>
                {/* <Profile /> */}
                {Author.map((blogauthor) => (
                  <Profile_details
                    key={blogauthor.key}
                    id={blogauthor.id}
                    time={blogauthor.time}
                    author_name={blogauthor.author_name}
                    author_avatar={blogauthor.author_avatar}
                    date={blogauthor.date}
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Article_Card;
