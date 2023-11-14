import React from 'react';
import Footer_Columns from '../Footer_Columns';

const Footer_Column4 = () => {
    const headingTitle = ['Contact Info'];
    const items = ['+92-313-1196411', 'info@sadiq.ai'];
    return (
        <>
            <div className="footer_column4">
                {headingTitle.map((HeadingTitles, Title) => (
                    <Footer_Columns key={Title} heading={HeadingTitles} />
                ))}
                {items.map((item, index) => (
                    <Footer_Columns key={index} text={item} />
                ))}
            </div>
        </>
    )
}

export default Footer_Column4;