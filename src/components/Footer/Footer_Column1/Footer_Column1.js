import React from 'react';
import Footer_All_Images from './Footer_All_Images';
import Footer_Column1_Images from './Footer_Column1_Images';
import { Colors } from '../../../constants/Color';
import { FontWeight } from '../../../constants/Fonts';

const Footer_Column1 = () => {

    const blogStyle = {
        color: Colors.Blue,
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="mb-4 md:mb-0 flex flex-col  max-md:items-center max-md:mb-10  justify-center  gap-4  md:mr-10">
                <div className="footer_logo flex">
                    <a href="#" className=' flex'>
                        <div className="logo_blog text-lg leading-normal not-italic mt-3 " style={blogStyle}>
                            blog.
                        </div>
                        <img src='../../../../images/logo.svg' className=" h-10 mb-2" />
                    </a>
                </div>
                <div className="footer_para1">Blog by Sadiq.ai</div>

                <div className="flex space-x-4 ">
                    <Footer_Column1_Images />
                </div>
            </div>
        </>
    )
}

export default Footer_Column1;