import React from 'react';
import Button_1 from '../Buttons/Button_1/Button_1';
import { Colors } from '../constants/Color';
import { FontsSize, FontWeight } from '../constants/Fonts';
import Logo_Navbar from '../Logo_Navbar/Logo_Navbar';


const NavBar = (props) => {

    const pagesStyle = {
        color: Colors.Black
    }

    const NavBarStyle = {
        backgroundColor: Colors['Light Grey 1'],
        fontWeight: FontWeight['Sub Heading2'],
    }

    return (
        <>
            <div className="Navbar w-full shadow-md	 h-24 max-md:h-20  flex justify-center items-center gap-72 max-xl:gap-60 max-lg:gap-32 max-md:gap-20 xl:h-40 xl:gap-80 overflow-hidden	max-sm:h-40 max-sm:block max-sm:w-full	" style={NavBarStyle}>
                <Logo_Navbar />
                <div className="sub_navbar inline-flex  justify-center items-center gap-x-12 max-lg:gap-8 max-md:gap-4 xl:gap-x-16 max-sm:block max-sm:w-full ">
                    <div className="sub2_navbar flex justify-center items-start gap-x-12 max-xl:gap-x-10 max-lg:gap-x-8  max-md:gap-x-5 max-sm:w-full  ">
                        <ul className="sub2_navbar flex justify-center items-start gap-x-12 max-xl:gap-x-10 max-lg:gap-x-8 max-md:gap-x-5 xl:gap-x-14  max-sm:w-full  ">
                            <li className="home pages capitalize list-none	text-xl max-xl:text-lg max-lg:text-sm max-md:text-xs xl:text-2xl"><a style={pagesStyle} href="" >{props.listTitle1}</a></li>
                            <li className="Category pages capitalize list-none	text-xl max-xl:text-lg max-lg:text-sm max-md:text-xs xl:text-2xl"><a style={pagesStyle} href="">{props.listTitle2}</a></li>
                            <li className="AboutMe pages capitalize list-none	text-xl max-xl:text-lg max-lg:text-sm max-md:text-xs xl:text-2xl"><a style={pagesStyle} href="">{props.listTitle3}</a></li>
                            <div className="search_nav pages  capitalize flex  gap-2  max-lg:gap-0 max-xl:gap-0">
                                <a style={pagesStyle} href="" className='search_anchor flex  gap-2  max-lg:gap-0'>
                                    <div className="search_image flex justify-center items-center xl:w-5  xl:h-7 ">
                                        <img src="./images/Icon.svg" className="icon w-4 h-4 max-md:w-3 max-md:h-3 xl:w-5 xl:h-5 xl:mt-1" />
                                    </div>
                                    <div className="search pages w-20 flex items-center justify-center text-xl max-xl:text-lg max-lg:text-sm max-lg:w-16 max-md:w-14 max-md:text-xs xl:text-2xl max-xl:w-14" >Search
                                    </div>
                                </a>
                            </div>

                        </ul>
                    </div>
                    <Button_1 />
                </div>
            </div>
        </>
    );
}



export default NavBar;