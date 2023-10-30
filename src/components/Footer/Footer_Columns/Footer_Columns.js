import React from 'react';

const Footer_Columns = (props) => {
    return (
        <>
            <div className="mb-4 md:mb-0  flex flex-col  items-center justify-start  max-lg:mx-4  ">
                <ul className=' flex flex-col justify-center  max-md:items-center flex-wrap w-32    '>
                    <h4 className="font-bold md:mb-2 ">{props.heading}</h4>
                    <li className='     max-md:text-center    '>
                        <a href="#" className="text-gray-900 hover:text-black ">
                            {props.text}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer_Columns;