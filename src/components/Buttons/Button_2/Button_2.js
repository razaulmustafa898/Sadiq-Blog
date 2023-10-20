import React from 'react';
import { Colors } from '../../constants/Color';
// import { FontsSize, FontWeight } from '';

const Button_2 = () => {
    const ButtonStyle = {
        backgroundColor: Colors.Blue,
    };

    return (
        <>
            {/* <FontsSize />
            <FontWeight />*/}

            <button style={ButtonStyle} className="Button_2">
                <div className="Button_text2">More Article</div>
            </button>
        </>
    );
}

export default Button_2;