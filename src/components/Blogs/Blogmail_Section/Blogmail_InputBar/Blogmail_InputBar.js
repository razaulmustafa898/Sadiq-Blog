import React, { useState } from 'react';

const Blogmail_InputBar = ({ onSubscribe }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        onSubscribe(email);
        setEmail(''); // Clear the input field
    };

    return (
        <>
            <div className="Blogmail_inputbar flex flex-col gap-y-4 w-full  ">
                <input
                    id='email'
                    type="email"
                    className="blog_mail_inpu_bar w-full flex py-2.5 px-3.5  text-base leading-6 not-italic text-ellipsis outline-blue-300 border-blue-300 border placeholder:select-none"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleInputChange}
                />
                <button id='blogmail_button'
                    className=' w-full h-12 text-base not-italic leading-6  mb-4 bg-sky-400 hover:bg-sky-500 text-white select-none ease-in-out duration-300'
                    onClick={handleSubscribe}
                >
                    Add Contributor
                </button>
            </div>
        </>
    );
};

export default Blogmail_InputBar;




// import React, { useState } from 'react';

// const Blogmail_InputBar = ({ onSubscribe }) => {
//     const [email, setEmail] = useState('');

//     const handleInputChange = (e) => {
//         setEmail(e.target.value);

//     };

//     const handleSubscribe = () => {
//         onSubscribe(email);
//     };

//     return (
//         <>
//             <div className="Blogmail_inputbar flex flex-col gap-y-4 w-full  ">
//                 <input
//                     id='email'
//                     type="email"
//                     className="w-full flex py-2.5 px-3.5  text-base leading-6 not-italic text-ellipsis outline-blue-300   border-blue-300 border 	"
//                     placeholder="Enter your Email"
//                     value={email}
//                     onChange={handleInputChange}
//                 />
//                 <button className='w-full h-12 text-base not-italic leading-6  mb-4 bg-sky-400
//                 hover:bg-sky-500 text-white select-none ease-in-out duration-300 '
//                     onClick={handleSubscribe} >Add Contributor</button>
//             </div>

//         </>
//     );
// };

// export default Blogmail_InputBar;
