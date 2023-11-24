import React from 'react'
import Signup_Login_Button from '../Signup_Login_Button/Signup_Login_Button';
import { Colors } from '../../../../constants/Color';

const Blog_Login_Btn = () => {
    return (
        <>
            <Signup_Login_Button
                singnuplogin_btn="Sign in" singnuplogin_btnStyle=" text-white mt-2 mb-4 max-md:text-sm " singnuplogin_btntype="submit"
                color={{  backgroundColor: Colors.Blue   }} />
            <Signup_Login_Button
                singnuplogin_btn="Sign in with Google" singnuplogin_btnimage="./images/google.png" btn_imgStyle="w-6 h-6" singnuplogin_btnStyle="flex justify-center gap-3 items-center font-semibold hover:bg-white border-2 border-gray-300 -mt-4 " singnuplogin_btntype="button" color={null} />
        </>
    )
}

export default Blog_Login_Btn;