import React from 'react'
import Button from './Button/Button';
import Button2 from './Button2/Button2';

const CTA_Buttons = () => {
    return (
        <>
            <div className="cta_buttons w-full  gap-3 flex max-sm:flex-col  justify-start items-start  ">
                <Button />
                <Button2 />
            </div>
        </>
    )
}

export default CTA_Buttons;