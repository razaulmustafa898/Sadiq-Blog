import React from 'react';
import { Colors } from '../../../constants/Color';
import { FontWeight, FontsSize} from '../../../constants/Fonts'

const Subheading_one = () => {

    const SubHeadingLine = {
        backgroundColor: Colors.Black,
    }

    const SubHeadingOne = {
        color: Colors['Dark Grey'],
        fontWeight: FontWeight['Paragraph 1'],
    }

    return (
        <>
            <div className="subheading_one_container flex  items-center gap-3   emax-sm:absolute  max-sm:top-fulls  max-sm:w-3/5 ">
                <div className="sub_heading_line w-1 h-14" style={SubHeadingLine}></div>
                <div className="subheading_one leading-normal not-italic text-xl  max-lg:text-base max-md:text-sm max-md:leading-normal max-sm:text-xs " style={SubHeadingOne}>
                    On this blog I share tips and tricks, frameworks, projects, tutorials, etc Make sure you subscribe to get the latest updates
                </div>
            </div>
        </>
    )
}

export default Subheading_one;