import React from 'react'
import { FontWeight } from '../../../constants/Fonts';

const Title_Subscribe = () => {

    const subHeadingStyle = {
        fontWeight: FontWeight.Heading1
    }

    const subParaStyle = {
        fontWeight: FontWeight['Paragraph 4']
    }

    return (
        <>
            <div className="subscribe_title">
                <div className="sub_heading text-3xl max-sm:text-xl text-center    " style={subHeadingStyle}>Subscribe For the lastest updates</div>
                <div className="sub_para text-gray-400  text-base text-center max-sm:text-xs max-sm:mt-7  " style={subParaStyle}>Subscribe to newsletter and never miss the new post every week.</div>
            </div>
        </>
    )
}

export default Title_Subscribe;