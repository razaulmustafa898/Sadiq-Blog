import React, { useState, useEffect } from 'react';
import { RTFJS } from 'rtf.js';

function RichTextViewer() {
    const [rtfText, setRtfText] = useState('');
    const [parsedText, setParsedText] = useState('');
    // const rtfContent = require("./RichText.rtf");

    const rtfContent = `{\rtf1\ansi\ansicpg1252\cocoartf2577
    \cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
    {\colortbl;\red255\green255\blue255;}`;

    // const editor = useRef(null);
    // const [content, setContent] = useState('');
    // const config = { readonly: false };

    useEffect(() => {
        // Parse the RTF content
        const rtf = `{\rtf1\ansi\ansicpg1252\cocoartf257}`;
        const rtfDocument = RTFJS.Document(rtfContent);
        // Extract the plain text content
        const plainText = rtfDocument.text();
        setParsedText(plainText);
    }, []);

    // const handleOnBlur = (newContent) => {
    //     console.log(newContent)
    //     setContent(newContent)
    // }

    return (
        <div >
            <pre>{parsedText}</pre>
        </div>
    );
}

export default RichTextViewer;