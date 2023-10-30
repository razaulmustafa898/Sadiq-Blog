import React from "react";
import Pages_Name from "../Pages_Name";
import Search_Name from "../Search_Name";

const DataNavbar = () => {
    return (
        <>
            <Pages_Name listTitle="Home" />
            <Pages_Name listTitle="About" />
            <Pages_Name listTitle="Category" />
            <Search_Name imgNavLink="./images/Icon.svg" searchName="Search" />
        </>
    )
}

export default DataNavbar;