import React from 'react';
import { Colors } from '../../constants/Color';
// import { FontsSize, FontWeight } from '';

const Button = () => {
    const ButtonStyle = {
        backgroundColor: Colors.Blue,
    };

    return (
        <>
            {/* <FontsSize />
            <FontWeight />*/}

            <button style={ButtonStyle} className="Button_1">
                <div className="Button_text1">Subscribe</div>
            </button>
        </>
    );
}

export default Button;