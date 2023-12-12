import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen snap-none select-none">
      <div className="bg-gray-200 p-8 rounded-lg max-w-md w-full">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 text-lg border outline-none select-none border-none rounded-none"
            value={input}
            readOnly
          />
          <input
            type="text"
            className="w-full p-2 text-lg border outline-none select-none border-none rounded-none "
            value={result}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "C",
            "+",
          ].map((button) => (
            <button
              key={button}
              className="p-2 bg-gray-300 rounded"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
          <button
            className="col-span-2 p-2 bg-blue-500 text-white rounded w-full"
            onClick={() => handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
