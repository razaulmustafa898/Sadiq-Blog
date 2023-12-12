import React, { useState } from "react";
import Blogmail_InputBar from "../Blogmail_InputBar/Blogmail_InputBar";

const Blogmail_Button1 = () => {
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const handleSubscribe = (email) => {
    if (email.length > 27) {
      email = email.substring(0, 27) + "...";
    }
    setSubscribedEmails([...subscribedEmails, email]);
  };

  return (
    <>
      <div className="sidebar_button1_container   w-72">
        <Blogmail_InputBar onSubscribe={handleSubscribe} />
        <div className=" flex flex-col gap-6   ">
          <div className="bg-gray-300 w-full h-px my-8"></div>
          {subscribedEmails.map((email, index) => (
            <>
              <div key={index} className="flex gap-3 items-center">
                <img
                  src="https://picsum.photos/200/200"
                  className="rounded-full h-12 inline"
                />
                <div className="flex flex-col  ">
                  <p className="font-bold text-sm ">{email}</p>
                  <p className="text-sm">Product Manager</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogmail_Button1;
