import React, { useState } from 'react';

const Blogmail_InputBar = ({ onSubscribe }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        onSubscribe(email);
    };

    return (
        <>
            <div className="Blogmail_inputbar flex flex-col gap-4">
                <input
                    type="email"
                    className="flex py-2.5 px-3.5  text-base leading-6 not-italic text-ellipsis outline-blue-300 border-gray-300 border 	"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleInputChange}
                />

                <button className='w-66 h-12 text-base not-italic leading-6  rounded-lg mb-4 bg-sky-400
                hover:bg-sky-500 text-white select-none ease-in-out duration-300'
                    onClick={handleSubscribe} >Subscribe</button>
            </div>

        </>
    );
};

export default Blogmail_InputBar;
