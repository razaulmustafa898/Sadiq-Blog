import React from 'react';
import { Colors } from '../../../../constants/Color';
import { FontWeight } from '../../../../constants/Fonts';

const Button = () => {
    const ButtonStyle = {
        backgroundColor: Colors.white,
    };
    const ButtonTextStyle = {
        color: Colors.Black,
        fontWeight: FontWeight.Heading1,
    };

    return (
        <>
            <div className="button_container  flex items-center max-sm:w-full   ">
                <button style={ButtonStyle} className="Button  max-sm:w-full flex h-16 pl-6 pr-6 justify-center items-center gap-2 rounded-lg border-2 border-gray-300  max-lg:h-10 max-lg:pr-3.5 max-lg:pl-3.5 max-md:h-8 max-md:rounded max-md:pl-2.5 max-md:pr-2.5">
                    <div className="Button_text1 leading-normal not-italic capitalize text-xl max-lg:text-xs max-md:text-ry " style={ButtonTextStyle}>Learn More</div>
                </button>
            </div>
        </>
    );
}

export default Button;