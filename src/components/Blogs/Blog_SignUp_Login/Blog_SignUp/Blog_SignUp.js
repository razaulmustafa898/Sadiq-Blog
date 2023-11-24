import React from 'react';
import Blog_SignUp_Heading from './Blog_SignUp_Heading';
import Signup_InputBar from './Signup_InputBar';
import Blog_SignUp_Btn from './Blog_SignUp_Btn';
import SignLogin_Image from '../SignLogin_Image/SignLogin_Image';
import Signup_Account from './Signup_Account';
import SignUp_Password from './SignUp_Password';
import NavBar from '../../../NavBar/NavBar';

const Blog_SignUp = () => {

    return (
        <>
            <NavBar />
            <div className="blog_signup flex items-center justify-center min-h-screen gap-14 gv:container max-md:gap-6  max-gv:w-full max-gv:p-0 w-screen ">
                <div className=" p-8 rounded  w-full max-w-md">
                    <Blog_SignUp_Heading />
                    <form className=' my-7 max-md:text-sm flex flex-col gap-4' >
                        <Signup_InputBar />
                        <SignUp_Password />
                        <Blog_SignUp_Btn />
                    </form>
                    <Signup_Account />
                </div>
                <SignLogin_Image />
            </div>
        </>
    )
}

export default Blog_SignUp
