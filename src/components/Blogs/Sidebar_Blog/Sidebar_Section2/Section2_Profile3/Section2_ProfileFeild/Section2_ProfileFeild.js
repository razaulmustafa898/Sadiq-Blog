import React from 'react';
import { FontWeight } from '../../../../../../constants/Fonts';

const Section2_ProfileFeild = (props) => {

    const section2Profile_Feild = {
        fontWeight: FontWeight['Paragraph 4']
    }

    return (
        <>
            <div className="section2_profilefeild text-base  not-italic  leading-6  " style={section2Profile_Feild} >
                {props.Section2ProfileFeild}
            </div>
        </>
    )
}

export default Section2_ProfileFeild;