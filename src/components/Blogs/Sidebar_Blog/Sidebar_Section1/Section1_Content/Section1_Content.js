import React from 'react';
import { FontWeight } from '../../../../../constants/Fonts';
import { Colors } from '../../../../../constants/Color';

const Section1_Content = (props) => {

  const subSection1Content = {
    fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    color: Colors['Dark Grey 2'],
  }

  return (
    <>
      <div className="subsection1_content  flex  items-center gap-2  "  >
        <a href="#" className='text-base not-italic leading-6'  style={subSection1Content} >
        {props.subSection1_Content}</a>
      </div>
    </>
  )
}

export default Section1_Content;