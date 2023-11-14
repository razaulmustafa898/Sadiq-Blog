import React from 'react'
import Signup_Login_Button from '../Signup_Login_Button/Signup_Login_Button';

const Blog_Login_Btn = () => {
    return (
        <>
            <Signup_Login_Button
                singnuplogin_btn="Sign in" singnuplogin_btnStyle="bg-violet-500 hover:bg-violet-600 text-white mt-2 mb-4  max-md:text-sm" singnuplogin_btntype="submit" />
            <Signup_Login_Button
                singnuplogin_btn="Sign in with Google" singnuplogin_btnimage="./images/google.png" btn_imgStyle="w-6 h-6" singnuplogin_btnStyle="flex justify-center gap-3 items-center font-semibold hover:bg-stone-100 border-2 border-gray-300 -mt-4 " singnuplogin_btntype="button" />
        </>
    )
}

export default Blog_Login_Btn;