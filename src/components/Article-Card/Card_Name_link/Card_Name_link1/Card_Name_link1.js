import React from 'react';
import { Colors } from '../../../constants/Color';
import { FontWeight } from '../../../constants/Fonts';

const Card_Name_link1 = () => {

  const CardLineStyle = {
    backgroundColor: Colors.Black,
  }

  const CardNameStyle = {
    fontWeight: FontWeight.Heading1,
  }

  const CardLinkStyle = {
    fontWeight: FontWeight.Heading1,
  }

  return (
    <>
      {/* <center>
        <div className="card_name_link  max-md:container  max-2xl:w-4/5  2xl:container  flex  w-full   justify-center  max-md:w-screen  mb-6 bg-yellow-100   ">
          <div className="card_name   w-full  flex justify-start items-center  bg-pink-200    ">
            <div className="card_name_text  text-xl  max-sm:text-xs " style={CardNameStyle}>Featured Article</div>
            <div className="card_line w-8 h-0.5 ml-2  max-sm:w-4 " style={CardLineStyle}></div>
          </div>
          <div className="card_link   w-full   flex justify-end items-center   bg-purple-200         ">
            <a href="" className='see_all_link flex items-center justify-end mr-1'>
              <div className="card_link_text mr-2 text-xl  max-sm:text-xs  " style={CardLinkStyle}>See All Article</div>
              <div className="scroll_right w-2 h-2  origin-center rotate-45  border-t-2 border-r-2 border-black	border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-t-1 max-sm:border-r-1  "></div>
            </a>
          </div>
        </div>
      </center> */}
      <div className="card_name_link container max-md:container  flex  w-full   justify-center  max-md:w-screen  mb-6      ">
        <div className="card_name  w-1/2  flex justify-start items-center max-sm:w-2/3 3xl:w-1/5 ">
          <div className="card_name_text  text-xl  max-sm:text-xs " style={CardNameStyle}>Featured Article</div>
          <div className="card_line w-8 h-0.5 ml-2  max-sm:w-4 " style={CardLineStyle}></div>
        </div>
        <div className="card_link w-1/2   flex justify-end items-center   3xl:w-1/5       ">
          <a href="" className='see_all_link flex items-center justify-end mr-1'>
            <div className="card_link_text mr-2 text-xl  max-sm:text-xs  " style={CardLinkStyle}>See All Article</div>
            <div className="scroll_right w-2 h-2  origin-center rotate-45  border-t-2 border-r-2 border-black	border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-t-1 max-sm:border-r-1  "></div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card_Name_link1;