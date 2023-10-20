import React from 'react';
import Social_Media from './Social_Media/Social_Media';

const Footer_Main = () => {
    return (
        <>
            <div className="footer_main">
                <img src="./images/logo.svg" alt="" className="sadiq_img" />
                <div className="sadiq_text">Digitaldastin by Dastin Darmawan</div>
                <Social_Media/>
            </div>
        </>
    )
}

export default Footer_Main;
