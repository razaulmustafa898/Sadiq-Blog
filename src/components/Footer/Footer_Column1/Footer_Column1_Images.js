import React from 'react'
import Footer_All_Images from './Footer_All_Images'

const Footer_Column1_Images = () => {
    return (
        <>
            <div className="footer_column1_images  flex   gap-1.5 "  >
                <Footer_All_Images ImgLinks="https://www.facebook.com/sadiq.facebook" socialMediaImages="../../../../images/facebook.svg" />
                <Footer_All_Images ImgLinks="https://www.twitter.com/sadiq_ai_" socialMediaImages="../../../../images/twitter.svg" />
                <Footer_All_Images ImgLinks="https://www.instagram.com/sadiq_ai_" socialMediaImages="../../../../images/instagram.svg" />
                <Footer_All_Images ImgLinks="https://www.linkedin.com/company/sadiq-ai/" socialMediaImages="../../../../images/linkedin.svg" />
                <Footer_All_Images ImgLinks="https://www.threads.net/@sadiq_ai_" socialMediaImages="../../../../images/threads.svg" />
                <Footer_All_Images ImgLinks="https://www.youtube.com/@sadiq_ai" socialMediaImages="../../../../images/youtube.svg" />
                <Footer_All_Images ImgLinks="https://www.tiktok.com/@sadiq_ai_" socialMediaImages="../../../../images/tiktok.svg" />
            </div>
        </>
    )
}

export default Footer_Column1_Images
