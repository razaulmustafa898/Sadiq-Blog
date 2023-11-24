import React from 'react'
import { Colors } from '../../../../constants/Color';

const Content_Row = () => {
    const rowStyle = {
        backgroundColor: Colors['Light Grey 3']
    }

    return (
        <>
            <div className="content_row w-full h-px my-8" style={rowStyle}> </div>
        </>
    )
}

export default Content_Row;