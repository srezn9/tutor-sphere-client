import React from "react";
import { useLoaderData, useParams } from "react-router";

const FindTutorsByCategory = () => {
  const tutors = useLoaderData();
  const { category } = useParams();

  return (
    <div className="px-4 sm:px-6 py-10 bg-base-100 text-base-content">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        All {category} Tutors ({tutors.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-32 h-32 object-cover rounded-2xl"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{tutor.name}</h3>
                <p className="text-sm">Language: {tutor.language}</p>
                <p className="text-sm">Price: ${tutor.price}</p>
                <p className="text-sm">Review: {tutor.review}</p>
                <p className="text-xs mt-2">
                  {tutor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutorsByCategory;
