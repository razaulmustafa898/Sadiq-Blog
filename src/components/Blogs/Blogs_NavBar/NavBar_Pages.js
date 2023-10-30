import React from 'react'
import Pages_Name from '../../NavBar/Pages_Name'

const NavBar_Pages = () => {
    return (
        <>
            <Pages_Name listTitle ="Home" />
            <Pages_Name listTitle ="Products" imgNavLink2="./images/scroll-arrow2.svg" />
            <Pages_Name listTitle ="Resources" imgNavLink2="./images/scroll-arrow2.svg" />
            <Pages_Name listTitle ="Pricing" />
        </>
    )
}

export default NavBar_Pages
