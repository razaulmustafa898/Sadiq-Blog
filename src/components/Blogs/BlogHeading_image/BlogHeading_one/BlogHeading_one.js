import React from 'react';
import { FontWeight } from '../../../../constants/Fonts';

const BlogHeading_one = (props) => {

    const HeadingStyle = {
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="heading_one text-5xl capitalize leading-normal max-xl:text-4xl max-md:text-2xl max-lg:leading-normal  max-md:leading-normal max-sm:mt-0 max-sm:text-4xl " style={HeadingStyle}>
                {props.headingOneTitle}
            </div>
        </>
    )
}

export default BlogHeading_one;