import React from 'react'
import { Colors } from '../../../constants/Color';

const Login_Button = (props) => {

    // const navBarBlogStyle = {
    //     backgroundColor: Colors.white,
    //     color: Colors.Black,
    // }

    return (
        <>
                <button className={props.className}
                //style={navBarBlogStyle} 
                >
                    <a href="">
                        <div>{props.blogButtonTitle}</div>
                    </a>
                </button>
        </>
    )
}

export default Login_Button;