import React from 'react'

const DropDown = () => {
    return (
        <>
            <div className="dropdown  w-111      ">
                <div className="dropbtn px-3 py-3   hover:text-white hover:bg-sky-400 duration-150 ease-in-out  bg-white cursor-pointer  ">
                    Drop Down</div>
                <div className="dropdown-content w-111 absolute z-10 shadow-md shadow-gray-300     ">
                    <div className="sub_dropdown   px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">Design</div>
                    <div className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">Coding</div>
                    <div className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">Product</div>
                    <div className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">Ideas</div>
                </div>
            </div>
        </>
    )
}

export default DropDown;