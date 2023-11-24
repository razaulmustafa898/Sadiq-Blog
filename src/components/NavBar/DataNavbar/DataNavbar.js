import React from "react";
import Pages_Name from "../Pages_Name";
import Search_Name from "../Search_Name";

const DataNavbar = () => {
    return (
        <>
            <Pages_Name listTitle="Home" pageLink="/home" />
            <Pages_Name listTitle="About" pageLink="/about"/>
            <Pages_Name listTitle="Category" pageLink="/category"/>
            <Search_Name imgNavLink="../../../../images/Icon.svg" searchName="Search" />
        </>
    )
}

export default DataNavbar;