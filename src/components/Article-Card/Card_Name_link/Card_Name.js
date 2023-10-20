import React from 'react';
import { Colors } from '../../constants/Color';
import { FontWeight } from '../../constants/Fonts';

const Card_Name = () => {

    const CardLineStyle = {
        backgroundColor: Colors.Black,
    }

    const CardNameStyle = {
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="card_name  w-1/2  flex justify-start items-center max-sm:w-2/3 3xl:w-1/5 ">
                <div className="card_name_text  text-xl  max-sm:text-xs " style={CardNameStyle}>Featured Article</div>
                <div className="card_line w-8 h-0.5 ml-2  max-sm:w-4 " style={CardLineStyle}></div>
            </div>
        </>
    )
}

export default Card_Name;
