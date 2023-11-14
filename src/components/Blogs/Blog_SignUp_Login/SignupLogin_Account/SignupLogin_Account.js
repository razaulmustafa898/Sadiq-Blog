import React from 'react'

const SignupLogin_Account = ({ Signup_login_account1, Signup_login_account2 }) => {
    return (
        <>
            <div className=" flex  justify-center gap-1 max-md:gap-0.5 text-sm">
                <div>{Signup_login_account1}</div>
                <a href='#login' className=" font-semibold text-violet-500 hover:text-violet-700">{Signup_login_account2}</a>
            </div>
        </>
    )
}

export default SignupLogin_Account;