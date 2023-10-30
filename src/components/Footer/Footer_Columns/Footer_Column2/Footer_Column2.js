import React from 'react';
import Footer_Columns from '../Footer_Columns';

const Footer_Column2 = () => {
    const items = ['2348 Walsh Ave, Santa Clara, CA 95051, USA'];
    const headingTitle = ['Headquarter'];
    return (
        <>
            <div className="footer_column2">
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

export default Footer_Column2;