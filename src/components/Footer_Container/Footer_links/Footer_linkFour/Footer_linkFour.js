import React from 'react';
import '../Footer_links.css';
import Footer_links from '../Footer_links';


const Footer_linkFour = () => {
    const items = ['Medium', 'Instagram', 'Twitter', 'Facebook'];

    return (
        <>
            <div className="footer_links">
                <h1 className='heading_links'>Follow Us</h1>
                <ul className='unorderlist_links'>
                    {items.map((item, index) => (
                        <Footer_links key={index} text={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Footer_linkFour;