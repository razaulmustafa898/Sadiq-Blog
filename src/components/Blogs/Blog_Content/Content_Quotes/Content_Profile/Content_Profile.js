import React from 'react'
import { FontWeight } from '../../../../constants/Fonts';

const Content_Profile = () => {

    const contentProfilName = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold']
    }

    const contentProfiFeild = {
        fontWeight: FontWeight['Paragraph 4']
    }

    return (
        <>
            <div className="content_profile flex flex-col items-center gap-3 self-stretch  ">
                <div className="content_profile_image flex justify-center items-center w-10 h-10 rounded-full ">
                    <a href="#">
                        <img src="https://fastly.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8" className=' rounded-full' />
                    </a>
                </div>
                <div className="content_profile_name_feild flex gap-0.5 flex-col">
                    <a href="#">
                        <div className="content_profile_name not-italic  text-base leading-6  text-center "
                            style={contentProfilName}  >
                            Olivia Rhye
                        </div>
                    </a>
                    <div className="content_profile_feild  text-center leading-6 text-base not-italic "
                        style={contentProfiFeild} >
                        Product Designer
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_Profile;