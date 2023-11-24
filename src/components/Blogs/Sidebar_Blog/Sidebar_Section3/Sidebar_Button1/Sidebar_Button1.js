import React from 'react'
import { Colors } from '../../../../../constants/Color'

const Sidebar_Button1 = () => {

    const sideBarButton = {
        color: Colors.white,
        backgroundColor: Colors.Blue,
    }

    return (
        <>
            <div className="sidebar_button1_container">
                <button className=' w-66 h-12 text-base not-italic leading-6  rounded-lg   '
                    style={sideBarButton}    >
                    Subscribe
                </button>
            </div>
        </>
    )
}

export default Sidebar_Button1
