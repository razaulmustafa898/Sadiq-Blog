import React from 'react';

const Sidebar_ImageSection4 = (props) => {
    return (
        <>
            <div className="sidebar_imagesection4 flex p-2.5 rounded-lg border-gray-300 border-2">
                <a href={props.ImageSection4link}>
                    <img src={props.ImageSection4}  className=' w-5 h-5'/>
                </a>
            </div>
        </>
    )
}

export default Sidebar_ImageSection4;