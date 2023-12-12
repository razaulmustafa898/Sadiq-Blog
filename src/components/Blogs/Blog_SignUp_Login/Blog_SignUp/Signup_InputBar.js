import React from "react";
import Blog_InpuBar from "../Blog_InpuBar/Blog_InpuBar";

const Signup_InputBar = () => {
  return (
    <>
      <Blog_InpuBar
        labelName="Name*"
        placeholderText="Enter your name"
        inputID="signup_name"
        labelFor="signup_name"
        inputName="signup_name"
      />
      <Blog_InpuBar
        labelName="Email*"
        placeholderText="Enter your email"
        inputID="signup_email"
        labelFor="signup_email"
        inputName="signup_email"
      />
      <Blog_InpuBar
        labelName="Password*"
        placeholderText="Enter your password"
        inputID="password"
        labelFor="password"
      />
    </>
  );
};

export default Signup_InputBar;
