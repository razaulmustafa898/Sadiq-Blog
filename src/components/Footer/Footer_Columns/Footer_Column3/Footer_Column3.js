import React from 'react';
import Footer_Columns from '../Footer_Columns';

const Footer_Column3 = () => {
    const items = ['W 1604, Dominion  Business Plaza 2, Main Jinnah Avenue, Bahria Town Karachi'];
    const headingTitle = ['Remote Office '];
    return (
        <>
            <div className="footer_column3">
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

export default Footer_Column3;