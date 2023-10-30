import React from 'react'
import { Colors } from '../../../constants/Color';

const SignUp_Button = (props) => {

    const navBarBlogStyle = {
        backgroundColor: Colors.Blue,
        color: Colors.white,
    }

    return (
        <>
            <button className=' flex justify-center items-center rounded-lg w-24 h-11'
                style={navBarBlogStyle} >
                <a href="">
                    <div>{props.blogButtonTitle}</div>
                </a>
            </button>
        </>
    )
}

export default SignUp_Button;