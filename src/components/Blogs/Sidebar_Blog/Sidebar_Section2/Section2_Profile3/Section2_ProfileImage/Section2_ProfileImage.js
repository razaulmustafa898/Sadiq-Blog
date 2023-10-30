import React from 'react';

const Section2_ProfileImage = (props) => {
    return (
        <>
            <a href="#">
                <div className="section2_profileimage  flex justify-center items-center w-12 h-12    ">
                    <img src={props.section2ProfileImage} className=' self-stretch rounded-full' />
                </div>
            </a>
        </>
    )
}

export default Section2_ProfileImage;