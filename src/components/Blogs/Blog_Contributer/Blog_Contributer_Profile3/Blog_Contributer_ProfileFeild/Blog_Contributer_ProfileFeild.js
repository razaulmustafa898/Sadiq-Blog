import React from 'react';
import { FontWeight } from '../../../../constants/Fonts';

const Blog_Contributer_ProfileFeild = (props) => {

    const section2Profile_Feild = {
        fontWeight: FontWeight['Paragraph 4']
    }

    return (
        <>
            <input className="section2_profilefeild text-base  not-italic  leading-6 outline-none w-full   " style={section2Profile_Feild} 
                value={props.Section2ProfileFeild}
            />
        </>
    )
}

export default Blog_Contributer_ProfileFeild;