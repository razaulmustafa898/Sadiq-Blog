import React from 'react'
import Login_Button from './Login_Button'

const Login_Buttonprops = () => {
    return (
        <>
            <div className="blogNavButton flex gap-2  max-sm:flex  max-sm:justify-center  max-sm:items-center  max-sm:mt-4  ">
                <Login_Button className="  text-black  flex justify-center items-center rounded-lg w-24 h-11  max-lg:w-20   max-lg:h-9   text-base max-lg:text-sm    " blogButtonTitle="Log in" />
                <Login_Button className="bg-sky-400 text-white  flex justify-center items-center rounded-lg w-24 h-11 max-lg:w-20   max-lg:h-9  text-base max-lg:text-sm    " blogButtonTitle="Sign Up" />
            </div>
        </>
    )
}

export default Login_Buttonprops;