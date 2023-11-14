import React, { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(1);
  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="practice flex justify-center items-center h-screen flex-col gap-5 bg-black">
        <div className="sub_practice flex flex-col justify-center items-center gap-5 py-12 px-10 border-2 border-blue-600 bg-black rounded-full hover:bg-gray-900 ease-in-out duration-300">
          <h1 className=" text-xl py-3 px-3.5 bg-gray-700 rounded-full select-none text-white">
            {count}
          </h1>
          <button
            onClick={IncNum}
            className="border-sky-500 border-2 text-sky-500 w-32 text-center h-12 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-sky-500 select-none hover:border-none hover:text-white font-semibold duration-300 ease-in-out hover:text-base  "
          >
            Click
          </button>
        </div>
      </div>
    </>
  );
};

export default Practice;
