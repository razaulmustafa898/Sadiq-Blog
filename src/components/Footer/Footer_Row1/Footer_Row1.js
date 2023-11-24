import React from 'react';
import { Colors } from '../../../constants/Color';
import { FontsSize } from '../../../constants/Fonts';

const Footer_Row1 = () => {

    const FooterRowStyle = {
        backgroundColor: Colors.Grey,
    }

    const FooterNameStyle = {
        fontSize: FontsSize['Paragraph 4'],
    }

    return (
        <>
            <center>
                <div className="footer_row1   w-4/5 h-px" style={FooterRowStyle}   >
                    <div className="subfooter_row1 pt-6">
                        <div className="footer_row1name" style={FooterNameStyle}>
                            © sadiq.ai 2023 all rights reserved.
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Footer_Row1;