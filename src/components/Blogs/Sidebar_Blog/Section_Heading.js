import React from 'react';
import { FontWeight } from '../../../constants/Fonts';
import { Colors } from '../../../constants/Color';

const Section_Heading = (props) => {

    const subSection_Heading = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
        color: Colors.Blue,
    }

    return (
        <>
            <div className="section1_heading ">
                <div className="subsection1_heading text-base not-italic leading-6 " style={subSection_Heading}    >
                    {props.subSectionHeading}
                </div>
            </div>
        </>
    )
}

export default Section_Heading;