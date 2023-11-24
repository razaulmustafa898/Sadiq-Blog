import React from 'react';
import { FontWeight } from '../../../../constants/Fonts';

const Content_Heading = (props) => {

    const subContentHeadingStyle = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold']
    }

    return (
        <>
            <div className="content_heading  text-3xl not-italic leading-9 max-md:text-2xl ">
                <div className="sub_content_heading"
                    style={subContentHeadingStyle} >
                    {props.subContentHeading}
                </div>
            </div>
        </>
    )
}

export default Content_Heading;