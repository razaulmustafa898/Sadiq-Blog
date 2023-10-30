import React from 'react'
import CTA_Content_Section from './CTA_Content_Section/CTA_Content_Section'
import CTA_Image_Section from './CTA_Image_Section/CTA_Image_Section'

const CTA_Section = () => {
    return (
        <>
            <div className="cta_section  flex flex-col justify-center items-center gap-16  container py-24  ">
                <div className="sub_cta_section max-sm:flex-col flex gap-16  ">
                    <CTA_Content_Section />
                    <CTA_Image_Section />
                </div>
            </div>
        </>
    )
}

export default CTA_Section
