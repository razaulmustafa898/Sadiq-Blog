import React from 'react';
import { FontWeight } from '../../../constants/Fonts';
import { Colors } from '../../../constants/Color';

const Blog_Contributer_Heading1 = (props) => {

    const subSection_Heading = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
        color: Colors.Blue,
    }

    return (
        <>
            <div className="section1_heading  w-full">
                <input className="subsection1_heading text-base not-italic leading-6 outline-none  px-2  py-1  w-65" style={subSection_Heading}  value={props.subSectionHeading} />
            </div>
        </>
    )
}

export default Blog_Contributer_Heading1;