import React from 'react';
import Input_Bar from './input_Bar/Input_Bar';
import Button from './Button/Button';

const Search_Bar = () => {
    return (
        <>
            <div className="search_button flex items-start gap-5 max-lg:gap-3 max-md:gap-1.5  emax-sm:absolute  max-sm:top-fulls    ">
                <Input_Bar/>
                <Button />
            </div>
        </>
    )
}

export default Search_Bar;