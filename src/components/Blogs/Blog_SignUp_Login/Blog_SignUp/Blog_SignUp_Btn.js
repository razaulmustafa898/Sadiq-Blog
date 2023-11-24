import React from 'react'
import Signup_Login_Button from '../Signup_Login_Button/Signup_Login_Button';
import { Colors } from '../../../../constants/Color';

const Blog_SignUp_Btn = () => {
    return (
        <>
            <Signup_Login_Button
                singnuplogin_btn="Get started" singnuplogin_btnStyle=" text-white mt-2 mb-4  max-md:text-sm" singnuplogin_btntype="submit" color={{ backgroundColor: Colors.Blue }} />
            <Signup_Login_Button
                singnuplogin_btn="Sign up with Google" singnuplogin_btnimage="./images/google.png" btn_imgStyle="w-6 h-6" singnuplogin_btnStyle="flex justify-center gap-3 items-center font-semibold hover:bg-white border-2 border-gray-300 -mt-4 " singnuplogin_btntype="button" />
        </>
    )
}

export default Blog_SignUp_Btn;