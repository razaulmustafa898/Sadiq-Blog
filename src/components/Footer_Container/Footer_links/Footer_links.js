import React from 'react';
import './Footer_links.css';

const Footer_links = (props) => {

    return (
        <>
            <li className='listitem_links'>{props.text}</li>
        </>
    )
}

export default Footer_links;
