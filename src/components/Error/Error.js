import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/Color";

const Error = () => {
  const HomePageColor = {
    color: Colors.Blue,
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen cursor-default">
        <div>
          <h1 className="font-extrabold text-6xl leading-normal text-center">
            404
          </h1>
          <h3 className="font-bold text-2xl leading-normal text-center">
            Page Not Found
          </h3>
          <div className="text-center leading-normal">
            The Page you are looking for doesn't exist or an other <br />
            occured. Go Back{" "}
            <span
              className="text-center leading-normal underline"
              style={HomePageColor}
            >
              <Link to="/home"> Home </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
