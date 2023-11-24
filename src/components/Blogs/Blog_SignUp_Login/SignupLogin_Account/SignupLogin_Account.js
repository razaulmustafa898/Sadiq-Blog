import React from 'react'
import { Link } from 'react-router-dom';

const SignupLogin_Account = ({ Signup_login_account1, Signup_login_account2, signuplogin_routing, color }) => {
    return (
        <>
            <div className=" flex  justify-center gap-1 max-md:gap-0.5 text-sm">
                <div>{Signup_login_account1}</div>
                <Link to={signuplogin_routing} className=" font-semibold " style={color}>{Signup_login_account2}</Link>
            </div>
        </>
    )
}

export default SignupLogin_Account;