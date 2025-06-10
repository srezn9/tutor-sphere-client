import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen relative flex items-center justify-center text-center px-4 bg-violet-500">
      {/* <Helmet>
        <title>Error 404 || BiteBloom</title>
      </Helmet> */}
      {/* <img
        src="https://i.postimg.cc/g051tnV3/error.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      /> */}
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="relative z-10 text-white max-w-lg">
        <h1 className="text-5xl font-extrabold text-teal-500 drop-shadow-lg mb-4">
          Oops!
        </h1>
        <div className="">
          <p className="text-xl text-gray-200 mb-2">
           It looks like the page you’re searching for doesn’t exist or has been moved.
          </p>
          <p className="text-sm text-gray-400 mb-6">
           But don’t worry — TutorSphere is here to guide you back on track.
          </p>
        </div>
        <Link
          to="/"
          className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition font-semibold shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
