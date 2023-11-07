import React from 'react';
import { FontWeight } from '../../../../constants/Fonts';

const Blog_Contributer_ProfileName = (props) => {

    const Section2ProfileName = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    }

    return (
        <>
            <input className="section2_profilename text-base leading-6 outline-none w-full  "
                style={Section2ProfileName}
                value={props.Section2__ProfileName}
            />
        </>
    )
}

export default Blog_Contributer_ProfileName;