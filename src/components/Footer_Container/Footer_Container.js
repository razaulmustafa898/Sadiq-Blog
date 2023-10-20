import React from 'react';
import Footer_Main from './Footer_Main/Footer_Main';
import Footer_linkOne from './Footer_links/Footer_linkOne/Footer_linkOne';
import Footer_linkTwo from './Footer_links/Footer_linkTwo/Footer_linkTwo';
import Footer_linkThree from './Footer_links/Footer_linkThree/Footer_linkThree';
import Footer_linkFour from './Footer_links/Footer_linkFour/Footer_linkFour';
import Footer_row from '../Footer_row/Footer_row'

const Footer_Container = () => {
    return (
        <>
            <div className="footer_container">
                <div className="sub_footer">
                    <Footer_Main />
                    <Footer_linkOne />
                    <Footer_linkTwo />
                    <Footer_linkThree />
                    <Footer_linkFour />
                </div>
                <Footer_row />
            </div>
        </>
    )
}

export default Footer_Container;
