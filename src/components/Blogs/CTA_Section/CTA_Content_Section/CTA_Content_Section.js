import React from 'react'
import { FontWeight } from '../../../../constants/Fonts';
import CTA_Buttons from '../CTA_Buttons/CTA_Buttons';

const CTA_Content_Section = () => {

    const CTAHeadingSection = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    }

    return (
        <>
            <div className="cta_content_section flex flex-col items-start gap-8  ">
                <div className="cta_content_heading_section text-5xl  not-italic leading-60 max-md:text-4xl  "
                  style={CTAHeadingSection}>
                    Join 4,000+ startups growing with Untitled
                </div>
                <div className="cta_content_check_items_section flex flex-col items-start gap-5">
                    <div className="cta_check_items flex items-start gap-3  ">
                        <div className="cta_check_circle w-7 h-7 rounded-full border-2 border-sky-500  flex justify-center items-center" >
                            <div className="cta_check text-sky-500 text-lg">✔</div>
                        </div>
                        <div className="cta_check_text text-lg max-md:text-sm">30-day free trial</div>
                    </div>
                    <div className="cta_check_items flex items-start gap-3 ">
                        <div className="cta_check_circle w-7 h-7 rounded-full border-2 border-sky-500  flex justify-center items-center" >
                            <div className="cta_check text-sky-500 text-lg">✔</div>
                        </div>
                        <div className="cta_check_text text-lg max-md:text-sm">Peronalized onboarding</div>
                    </div>
                    <div className="cta_check_items flex items-start gap-3 ">
                        <div className="cta_check_circle w-7 h-7 rounded-full border-2 border-sky-500  flex justify-center items-center" >
                            <div className="cta_check text-sky-500 text-lg">✔</div>
                        </div>
                        <div className="cta_check_text text-lg max-md:text-sm">Access to all features </div>
                    </div>
                </div>
                <CTA_Buttons />
            </div>
        </>
    )
}

export default CTA_Content_Section;