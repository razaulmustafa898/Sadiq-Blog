import React from 'react'
import { Colors } from '../constants/Color';

const Pages_Name = (props) => {

    const pagesStyle = {
        color: Colors.Black
    }

    return (
        <>
            <li className="capitalize list-none text-xl max-xl:text-lg max-lg:text-sm max-md:text-xs xl:text-2xl ">
                <a style={pagesStyle} href="" >{props.listTitle}
                </a>
            </li>
        </>
    )
}

export default Pages_Name;