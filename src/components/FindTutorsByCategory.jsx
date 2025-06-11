import React from "react";
import { useLoaderData, useParams } from "react-router";

const FindTutorsByCategory = () => {
  const tutors = useLoaderData(); // tutors filtered by language
  const { category } = useParams();

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        All {category} Tutors ({tutors.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className=" bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between gap-10">
                <img
              src={tutor.image}
              alt={tutor.name}
              className="w-50 rounded-3xl"
            />
            <div>
                <h3 className="text-xl font-semibold">{tutor.name}</h3>
            <p>Language: {tutor.language}</p>
            <p>Price: ${tutor.price}</p>
            <p>Review: {tutor.review}</p>
            <p className="text-sm text-gray-600 mt-2">{tutor.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutorsByCategory;
