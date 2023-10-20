import React from 'react';
import Heading_one from '../Heading_one/Heading_one';
import Subheading_one from '../Subheading_one/Subheading_one';
import Search_Bar from '../Search_Bar/Search_Bar';

const Heading_Container = () => {
    return (
        <>
            <div className="heading_container inline-flex flex-col gap-7 
                 h-105 justify-center max-2xl:w-2/4 max-sm:w-full  ">
                <Heading_one />
                <Subheading_one />
                <Search_Bar />
            </div>
        </>
    )
}

export default Heading_Container;