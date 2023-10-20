import React from 'react';
import Input_Bar from './input_Bar/Input_Bar';
import Button from './Button/Button';

const Search_Bar = () => {
    return (
        <>
            <div className="search_button">
                <Input_Bar />
                <Button />
            </div>
        </>
    )
}

export default Search_Bar;