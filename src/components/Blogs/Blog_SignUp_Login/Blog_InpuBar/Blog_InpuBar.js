import React from "react";

const Blog_InpuBar = ({
  labelName,
  placeholderText,
  inputID,
  labelFor,
  inputName,
}) => {
  return (
    <>
      <div className="input__bar">
        <label
          htmlFor={labelFor}
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          {labelName}
        </label>
        <input
          type="text"
          name={inputName}
          id={inputID}
          className="w-full p-2 rounded outline outline-2 outline-gray-200  "
          required
          placeholder={placeholderText}
        />
      </div>
    </>
  );
};

export default Blog_InpuBar;
