import React from 'react';
import { FontWeight } from '../../constants/Fonts';

const Heading_one = () => {

    const HeadingStyle = {
        fontWeight: FontWeight.Heading1,
    }

    return (
        <>
            <div className="heading_one text-6xl capitalize leading-normal max-lg:text-5xl max-lg:leading-normal max-md:text-4xl max-md:leading-normal max-sm:mt-10 " style={HeadingStyle}>
                Hi, i’m Dasteen <br />
                Front end dev
            </div>
        </>
    )
}

export default Heading_one;