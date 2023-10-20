import React from 'react';
import { Colors } from '../../constants/Color';
import { FontsSize, FontWeight } from '../../constants/Fonts';

const Button_1 = () => {
    const ButtonStyle = {
        backgroundColor: Colors.Blue,
        color: Colors.white
    };

    const ButtonText = {
        fontSize: FontsSize['Paragraph 2'],
        fontWeight: FontWeight['Sub Heading2'],
    }


    return (
        <>
            <div className="nav_button_one max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-end max-sm:h-12">
                <button style={ButtonStyle} className="nav_button flex py-2.5 w-44 justify-center rounded	 items-center gap-2 xl:w-52 max-lg:w-36 max-md:w-32  ">
                    <img src="./images/buymeacoffee.svg" alt="" className="img_icons w-6 h-6 max-xl:w-5 max-xl:h-5 max-lg:w-4 max-lg:h-4 max-md:w-3 max-md:h-3 " />
                    <div className="button_text text-lg capitalize max-xl:text-sm max-lg:text-xs" >buy Me a Coffee</div>
                </button>
            </div>
        </>
    );
}

export default Button_1;