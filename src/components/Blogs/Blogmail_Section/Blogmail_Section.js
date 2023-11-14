import React from 'react';
import Blogmail_Heading from './Blogmail_Heading';
import Blogmail_InputBar from './Blogmail_InputBar/Blogmail_InputBar';
import Blogmail_Button1 from './Blogmail_Button1/Blogmail_Button1';

const Blogmail_Section = () => {
    return (
        <>
            <div
                className="blogmail_section flex flex-col gap-4  max-sm:w-4/5 max-gv:w-11/12 ">
                <Blogmail_Heading />
                <Blogmail_Button1 />
            </div>
        </>
    )
}

export default Blogmail_Section;
