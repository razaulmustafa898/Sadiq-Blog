import React from 'react';
import '../Footer_links.css';
import Footer_links from '../Footer_links';


const Footer_linkOne = () => {
    const items = ['CSS', 'Javascript', 'Tailwind', 'React JS'];

    return (
        <>
            <div className="footer_links">
                <h1 className='heading_links'>Category</h1>
                <ul className='unorderlist_links'>
                    {items.map((item, index) => (
                        <Footer_links key={index} text={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Footer_linkOne;