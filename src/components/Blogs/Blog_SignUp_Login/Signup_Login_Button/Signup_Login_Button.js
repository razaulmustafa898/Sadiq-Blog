import React from 'react'
import { Colors } from '../../../../constants/Color';

const Signup_Login_Button =
    ({ singnuplogin_btn, singnuplogin_btnimage, btn_imgStyle, singnuplogin_btnStyle, singnuplogin_btntype, color }) => {

        return (
            <>
                <button
                    type={singnuplogin_btntype}
                    className={`w-full p-2 rounded-lg focus:outline-none 
                    ${singnuplogin_btnStyle}`} style={color}>
                    <img src={singnuplogin_btnimage} className={`${btn_imgStyle}`} />
                    <div className='max-md:text-sm'>{singnuplogin_btn}</div>

                </button>
            </>
        )
    }

export default Signup_Login_Button;