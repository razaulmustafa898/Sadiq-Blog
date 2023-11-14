import React from 'react'
import Blog_InpuBar from '../Blog_InpuBar/Blog_InpuBar';

const Signup_InputBar = () => {

    return (
        <>
            <Blog_InpuBar  labelName="Name*" placeholderText="Enter your name"  inputID="name" />
            <Blog_InpuBar  labelName="Email*" placeholderText="Enter your email" inputID="email" />
            <Blog_InpuBar  labelName="Password*" placeholderText="Enter your password" inputID="password" />
        </>
    )
}

export default Signup_InputBar;