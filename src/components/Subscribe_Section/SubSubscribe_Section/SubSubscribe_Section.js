import React from 'react';
import Image_Subscribe from './image_Subscribe/Image_Subscribe';
import Title_Subscribe from './Title_Subscribe/Title_Subscribe';
import Search_Bar from './Search_Bar/Search_Bar';

const SubSubscribe_Section = () => {
    return (
        <>
            <div className="subsubscribe_section  h-79 w-103 flex justify-center items-center flex-col  gap-7  max-md:w-97   container      ">
                <Image_Subscribe/>
                <Title_Subscribe/>
                <Search_Bar/>
            </div>
        </>
    )
}

export default SubSubscribe_Section;