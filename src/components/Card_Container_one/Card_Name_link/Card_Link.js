import React from 'react';
import { FontWeight } from '../../../constants/Fonts';

const Card_Link = () => {
    const CardLinkStyle = {
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="card_link w-1/2   flex justify-end items-center 3xl:w-1/4 ">
                <a href="" className='see_all_link flex items-center justify-end mr-1'>
                    <div className="card_link_text mr-2   max-sm:text-xs " style={CardLinkStyle}>See All Article</div>
                    <div className="scroll_right w-2 h-2  origin-center rotate-45  border-t-2 border-r-2 border-black	border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-t-1 max-sm:border-r-1  "></div>
                </a>
            </div>
        </>
    )
}

export default Card_Link;