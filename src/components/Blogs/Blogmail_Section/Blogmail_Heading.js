import React from 'react'
import { FontWeight } from '../../constants/Fonts';
import { Colors } from '../../constants/Color';

const Blogmail_Heading = () => {
    const subSection_Heading = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
        color: Colors.Blue,
    }
    return (
        <>
            <div className="blogmail_heading ">
                <div className="sub_blogmail_heading text-base not-italic leading-6 "
                    style={subSection_Heading}    >
                    Contributors
                </div>
            </div>
        </>
    )
}

export default Blogmail_Heading;