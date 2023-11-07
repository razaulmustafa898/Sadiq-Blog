import React, { useState } from 'react';
import Blogmail_InputBar from '../Blogmail_InputBar/Blogmail_InputBar';

const Blogmail_Button1 = () => {
    const [subscribedEmail, setSubscribedEmail] = useState('');

    const handleSubscribe = (email) => {
        setSubscribedEmail(email);
    };

    return (
        <>
            <div className="sidebar_button1_container">
                <Blogmail_InputBar onSubscribe={handleSubscribe} />
                {subscribedEmail && <p>You have subscribed with the email: {subscribedEmail}</p>}
            </div>
        </>
    );
};

export default Blogmail_Button1;
