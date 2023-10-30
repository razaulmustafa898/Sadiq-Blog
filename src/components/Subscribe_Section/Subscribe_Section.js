import React from 'react';
import SubSubscribe_Section from './SubSubscribe_Section/SubSubscribe_Section';
import { Colors } from '../constants/Color';

const Subscribe_Section = () => {

    const SubscribeSection = {
        backgroundColor: Colors['Light Grey 1'],
    }

    return (
        <>
            <div className="subscribe_section   w-full h-101 flex justify-center items-center container      "
                style={SubscribeSection}        >
                <SubSubscribe_Section />
            </div>
        </>
    )
}

export default Subscribe_Section;