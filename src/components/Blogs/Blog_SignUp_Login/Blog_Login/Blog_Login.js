import React from 'react';
import Blog_Login_Heading from './Blog_Login_Heading';
import Login_InputBar from './Login_InputBar';
import Blog_Login_Btn from './Blog_Login_Btn';
import Login_Account from './Login_Account';
import SignLogin_Image from '../SignLogin_Image/SignLogin_Image';
import Login_Password from './Login_Password';
import NavBar from '../../../NavBar/NavBar';

const Blog_Login = () => {
    return (
        <>
            <NavBar />
            <div className="blog_signup flex items-center justify-center min-h-screen  gap-14 gv:container max-md:gap-6  max-gv:w-full max-gv:p-0 w-screen ">
                <div className=" p-8 rounded  w-full max-w-md">
                    <Blog_Login_Heading />
                    <form className=' my-7 max-md:text-sm flex flex-col gap-4' >
                        <Login_InputBar />
                        <Login_Password />
                        <Blog_Login_Btn />
                    </form>
                    <Login_Account />
                </div>
                <SignLogin_Image />
            </div>
        </>
    )
}

export default Blog_Login
