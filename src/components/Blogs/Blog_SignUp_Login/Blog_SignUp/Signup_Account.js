import React from 'react'
import SignupLogin_Account from '../SignupLogin_Account/SignupLogin_Account'
import { Colors } from '../../../../constants/Color';

const Signup_Account = () => {
    return (
        <>
            <SignupLogin_Account Signup_login_account1="Already have an account?" Signup_login_account2="Log in" signuplogin_routing="/login" color={{ color: Colors.Blue }}/>
        </>
    )
}

export default Signup_Account;