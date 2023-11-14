import React from 'react'

const Blog_InpuBar = ({ labelName, placeholderText, inputID }) => {
    return (
        <>
            <div className="input__bar">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                    {labelName}
                </label>
                <input
                    type="text"
                    id={inputID}
                    className="w-full  p-2 rounded outline outline-2 outline-gray-200 focus:outline-violet-300 "
                    required
                    placeholder={placeholderText}
                />
                {/* <div className={props.PasswordStyle1}>
                    <div className={props.PasswordStyle2}>
                        <input type={props.inputType} />
                        <p> {props.Passwordpara1}</p>
                    </div>
                    <div className={props.PasswordStyle3}>
                        <a href="#forgot" className={props.PasswordStyle4} >
                            {props.Passwordpara2}
                        </a>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Blog_InpuBar;