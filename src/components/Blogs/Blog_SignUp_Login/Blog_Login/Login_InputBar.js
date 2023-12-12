import React from "react";
import Blog_InpuBar from "../Blog_InpuBar/Blog_InpuBar";

const Login_InputBar = () => {
  return (
    <>
      <Blog_InpuBar
        labelName="Email*"
        placeholderText="Enter your email"
        inputID="login_email"
        labelFor="login_email"
        inputName="login_email"
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

export default Login_InputBar;
