import React from 'react';
import Footer_Columns from '../Footer_Columns';

const Footer_Column4 = () => {
    const items = ['+92-313-1196411'];
    const items1 = ['info@sadiq.ai'];
    const headingTitle = ['Contact Info'];
    return (
        <>
            <div className="footer_column4">
                {headingTitle.map((HeadingTitles, Title) => (
                    <Footer_Columns key={Title} heading={HeadingTitles} />
                ))}
                {items.map((item, index) => (
                    <Footer_Columns key={index} text={item} whatsappimgIcon="bg-whatsapp-icon w-5 h-4 bg-cover bg-no-repeat"     />
                ))}
                {items1.map((item1, index1) => (
                    <Footer_Columns key={index1} text={item1} whatsappimgIcon="bg-email-icon w-5 h-4 bg-cover bg-no-repeat"     />
                ))}
            </div>
        </>
    )
}

export default Footer_Column4;