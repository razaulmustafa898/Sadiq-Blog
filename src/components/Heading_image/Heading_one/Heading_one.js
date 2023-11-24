import React from 'react';
import { FontWeight } from '../../../constants/Fonts';

const Heading_one = (props) => {

    const HeadingStyle = {
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="heading_one text-6xl capitalize leading-normal max-lg:text-5xl max-lg:leading-normal max-md:text-4xl max-md:leading-normal max-sm:mt-10 " style={HeadingStyle}>
                {props.headingOneTitle}
            </div>
        </>
    )
}

export default Heading_one;