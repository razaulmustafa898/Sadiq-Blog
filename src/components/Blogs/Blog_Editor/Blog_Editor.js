import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Blogmail_Section from "../Blogmail_Section/Blogmail_Section";
import HTMLReactParser from "html-react-parser";
import BlogEditor_Button1 from "./BlogEditor_Button1/BlogEditor_Button1";
import BlogEditor_Button2 from "./BlogEditor_Button2/BlogEditor_Button2";
import BlogPost_Title1 from "./BlogPost_Title/BlogPost_Title1";
import BlogPost_Title2 from "./BlogPost_Title/BlogPost_Title2";
import BlogPost_Title3 from "./BlogPost_Title/BlogPost_Title3";
import MyDropdown from "./BlogEditor_DropDown/MyDropdown";
import "../../../App.css";
import NavBar from "../../NavBar/NavBar";

const Blog_Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <NavBar />
      <div className="blog_editor w-full flex flex-row  justify-center mt-5  sm:container gap-5 max-md:flex-col max-sm:items-center    ">
        <div className="sub_blog_editor p-3 w-full bg-white flex flex-col gap-3 max-sm:w-4/5 max-gv:w-11/12  ">
          <div className="font-bold text-xl">What going in your mind?</div>
          <div className=" flex flex-col">
            <BlogPost_Title1 />
            <input
              type="text"
              placeholder="Enter Here"
              className="border border-gray-300  p-2 outline-blue-300 placeholder:select-none"
            />
          </div>
          <div className=" flex flex-col">
            <BlogPost_Title2 />
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
              style={{ backgroundColor: "red" }}
            />
          </div>
          <div className=" flex flex-col">
            <BlogPost_Title3 />
            <MyDropdown />
          </div>
          <div className=" flex  justify-center gap-4 max-sm:flex-col">
            <BlogEditor_Button1 />
            <BlogEditor_Button2 />
          </div>
          <div className=" p-0 container">{HTMLReactParser(content)}</div>
        </div>
        <Blogmail_Section />
      </div>
    </>
  );
};

export default Blog_Editor;
