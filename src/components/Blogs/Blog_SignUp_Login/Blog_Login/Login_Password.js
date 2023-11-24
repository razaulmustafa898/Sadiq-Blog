import React from 'react'
import { Colors } from '../../../../constants/Color'

const Login_Password = () => {
    const passwordStyle = {
            color: Colors.Blue
    }

    return (
        <div className='  -mt-2  flex w-full  justify-center max-lg:text-sm  max-md:text-xs '>
            <div className=' flex  w-3/5 gap-1.5  items-center max-lg:gap-0.5  max-md:w-1/2 '>
                <input type="checkbox" name="" id="" />
                <p className=''>Remember for 30 days</p>
            </div>
            <div className="  w-2/5 text-right  max-md:w-1/2">
                <a href="#forgot" className=' font-semibold   '  style={passwordStyle}>
                    Forgot password
                </a>
            </div>
        </div>
    )
}

export default Login_Password
