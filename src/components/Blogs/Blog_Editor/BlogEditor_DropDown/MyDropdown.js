import React, { useState } from 'react';

function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuVisibility, setMenuVisibility] = useState(false);

    const options = ['Products', 'Coding', 'Design'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setMenuVisibility(false);
    };

    return (
        <div className="relative inline-block text-left w-full">
            <div
                onClick={() => setMenuVisibility(!menuVisibility)}
                className="flex px-4 py-2 bg-gray-100 hover:cursor-pointer w-full max-md:w-full select-none" >
                {selectedOption || 'Select'}
                <div className=' absolute right-3 mt-1.5 w-2 h-2 origin-center rotate-45  border-b-2 border-r-2 border-black border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-b-1 max-sm:border-r-1   '></div>
            </div>
            {menuVisibility && (
                <div className="origin-top-right w-full max-md:w-full bg-gray-100 absolute z-10 select-none ">
                    <div className=" " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="block px-4 py-2  
                                hover:cursor-pointer hover:bg-sky-400   hover:text-white"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
