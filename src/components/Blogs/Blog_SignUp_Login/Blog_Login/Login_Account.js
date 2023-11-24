import React from 'react'
import SignupLogin_Account from '../SignupLogin_Account/SignupLogin_Account';
import { Colors } from '../../../../constants/Color';

const Login_Account = () => {
    return (
        <>
            <SignupLogin_Account Signup_login_account1="Don’t have an account?"
                Signup_login_account2="Sign up" signuplogin_routing="/signup"
                color={{ color: Colors.Blue }} />
        </>
    )
}

export default Login_Account;