import React from "react";

const Input_Bar = () => {
  return (
    <>
      <div className="input_bar_container">
        <input
          type="email"
          className="input_search_bar rounded-lg flex items-center gap-2 pr-48 pt-5 pb-5 pl-6 border-none outline-none	max-lg:pr-32 max-lg:pt-3 max-lg:pb-3 max-lg:pl-3 max-lg:text-xs max-lg:rounded-md max-md:pr-20 max-md:pl-2 max-md:pb-2 max-md:pt-2 max-md:rounded max-md:text-ry"
          placeholder="Enter your email here...."
          name="email_name"
        />
      </div>
    </>
  );
};

export default Input_Bar;
