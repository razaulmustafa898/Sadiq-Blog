import React from 'react'

const Content_Image = (props) => {
    return (
        <>
            <div className="content_image  w-full  justify-center flex    ">
                <img src={props.ContentImage} className='  rounded-xl' />
            </div>
        </>
    )
}

export default Content_Image;