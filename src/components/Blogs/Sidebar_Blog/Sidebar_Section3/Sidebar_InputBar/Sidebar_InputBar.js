import React from "react";

const Sidebar_InputBar = () => {
  return (
    <>
      <div className="sidebar_inputbar">
        <input
          type="text"
          className=" flex  py-2.5 px-3.5 rounded-lg border-2 border-gray-300  text-base leading-6 not-italic  text-ellipsis outline-none w-66  "
          placeholder="Enter your Email"
          name="email_name"
        />
      </div>
    </>
  );
};

export default Sidebar_InputBar;
