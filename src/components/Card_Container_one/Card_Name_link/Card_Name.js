import React from 'react';
import { Colors } from '../../constants/Color';

const Card_Name = () => {

    const CardLineStyle = {
        backgroundColor: Colors.Black,
    }

    return (
        <>
            <div className="card_name  w-1/2  flex justify-start items-center max-sm:w-2/3 3xl:w-1/4 ">
                <div className="card_name_text  max-sm:text-xs ">Featured Article</div>
                <div className="card_line w-8 h-px ml-2  max-sm:w-4 " style={CardLineStyle}></div>
            </div>
        </>
    )
}

export default Card_Name;
