import React from 'react'
import DropDown_Products from './DropDown_Products'
import DropDown_Design from './DropDown_Design'
import DropDown_Coding from './DropDown_Coding'

const BlogEditor_DropDown = () => {
    return (
        <>
            <div className="blogeditor_dropdown">
                <div className="dropdown  w-111   ">
                    <div className="dropbtn px-3 py-3 hover:text-white hover:bg-sky-400 duration-150 ease-in-out bg-gray-100 cursor-pointer shadow-md shadow-gray-200  " >
                        Select</div>
                    <div className="dropdown-content w-111 absolute z-10 shadow-md shadow-gray-200 bg-gray-100">
                        <DropDown_Products />
                        <DropDown_Design />
                        <DropDown_Coding />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogEditor_DropDown;








// import React, { useState } from 'react';

// function BlogEditor_DropDown() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsDropdownOpen(false);
//     };

//     return (
//         <div className="blogeditor_dropdown">
//             <div className={`dropdown w-111 ${isDropdownOpen ? 'open' : ''}`}>
//                 <div onClick={toggleDropdown} className="dropbtn px-3 py-3 hover:text-white hover:bg-sky-400 duration-150 ease-in-out bg-gray-100 cursor-pointer shadow-md shadow-gray-200">
//                     {selectedOption || 'Select'}
//                 </div>
//                 <div className="dropdown-content w-111 absolute z-10 shadow-md shadow-gray-200 bg-gray-100">
//                     <div onClick={() => handleOptionClick('Design')} className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">
//                         Design
//                     </div>
//                     <div onClick={() => handleOptionClick('Coding')} className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">
//                         Coding
//                     </div>
//                     <div onClick={() => handleOptionClick('Product')} className="sub_dropdown  px-3 py-3  hover:text-white hover:bg-sky-400 duration-150 ease-in-out  cursor-pointer">
//                         Product
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BlogEditor_DropDown;










