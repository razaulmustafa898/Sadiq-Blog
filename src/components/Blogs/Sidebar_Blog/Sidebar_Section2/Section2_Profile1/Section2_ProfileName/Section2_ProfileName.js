import React from 'react';
import { FontWeight } from '../../../../../../constants/Fonts';

const Section2_ProfileName = (props) => {

    const Section2ProfileName = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    }

    return (
        <>
            <a href="#">
                <div className="section2_profilename text-base leading-6 "
                    style={Section2ProfileName} >
                    {props.Section2__ProfileName}
                </div>
            </a>
        </>
    )
}

export default Section2_ProfileName;