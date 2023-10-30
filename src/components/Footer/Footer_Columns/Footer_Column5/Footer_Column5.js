import React from 'react';
import Footer_Columns from '../Footer_Columns';

const Footer_Column5 = () => {
    const items = ['Policies'];
    const headingTitle = ['Resources'];
    return (
        <>
            <div className="footer_column5">
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

export default Footer_Column5;