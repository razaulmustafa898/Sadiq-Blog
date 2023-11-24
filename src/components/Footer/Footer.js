import React from 'react';
import Footer_Column1 from './Footer_Column1/Footer_Column1';
import Footer_Column2 from './Footer_Columns/Footer_Column2/Footer_Column2';
import Footer_Column3 from './Footer_Columns/Footer_Column3/Footer_Column3';
import Footer_Column4 from './Footer_Columns/Footer_Column4/Footer_Column4';
import Footer_Column5 from './Footer_Columns/Footer_Column5/Footer_Column5';
import { Colors } from '../../constants/Color';
import Footer_Row1 from './Footer_Row1/Footer_Row1';

const Footer = () => {

    const FooterBgStyle = {
        backgroundColor: Colors['Light Grey 2'],
    }

    return (
        <footer className=" text-black py-20  " style={FooterBgStyle}>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-start max-md:items-center  gap-20   max-xl:gap-0 max-xl:justify-between md:h-47 mb-10  max-md:gap-6  ">
                <Footer_Column1 />
                <Footer_Column2 />
                <Footer_Column3 />
                <Footer_Column4 />
                <Footer_Column5 />
            </div>
            <Footer_Row1 />
        </footer>
    );
};

export default Footer;
