import React from "react";
import { Link, useLoaderData } from "react-router";

const FindTutors = () => {
  const tutors = useLoaderData(); 
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-2 text-center">Find Your Tutors</h1>
      <p className="text-center mb-12">
        Explore our curated list of expert language tutors ready to help you
        learn, grow, and achieve your goals at your own pace.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className=" rounded-3xl p-4 shadow-lg flex gap-10"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-50 rounded-3xl"
            />

            <div>
              <h2 className="text-xl font-semibold">{tutor.name}</h2>
              <p>
                <strong>Language:</strong> {tutor.language}
              </p>
              <p>
                <strong>Review:</strong> {tutor.review}
              </p>
              <p className="text-gray-600 mt-2">{tutor.description}</p>
              <Link to ={`/tutors/${tutor._id}`}>
              <button className="mt-4 px-4 py-2 bg-violet-500 text-white rounded hover:bg-blue-600 transition">
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
