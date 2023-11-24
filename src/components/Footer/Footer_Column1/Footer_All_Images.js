import React from 'react'

const Footer_All_Images = (props) => {
    return (
        <>
            <div className="footer_twitter  w-5 h-5 flex  justify-center items-center ">
                <a href={props.ImgLinks} target='_blank'>
                    <img src={props.socialMediaImages} className=" w-4 h-4 hover:w-5 hover:h-5" />
                </a>
            </div>
        </>
    )
}

export default Footer_All_Images
