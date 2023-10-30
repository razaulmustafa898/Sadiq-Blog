import React from 'react'
import { Colors } from '../constants/Color';

const Search_Name = (props) => {

    const pagesStyle = {
        color: Colors.Black
    }

    return (
        <>
            <div className="search_nav pages  capitalize flex  gap-2  max-lg:gap-0 max-xl:gap-0">
                <a style={pagesStyle} href="" className='search_anchor flex  gap-2  max-lg:gap-0'>
                    <div className="search_image flex justify-center items-center xl:w-5  xl:h-7 ">
                        <img src={props.imgNavLink} className="icon w-4 h-4 max-md:w-3 max-md:h-3 xl:w-5 xl:h-5 xl:mt-1" />
                    </div>
                    <div className="search pages w-20 flex items-center justify-center text-xl max-xl:text-lg max-lg:text-sm max-lg:w-16 max-md:w-14 max-md:text-xs xl:text-2xl max-xl:w-14" >{props.searchName}
                    </div>
                </a>
            </div>
        </>
    )
}

export default Search_Name;