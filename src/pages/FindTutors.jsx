import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchTutors = async (language = "") => {
    try {
      const res = await fetch(
        `http://localhost:3000/tutors${language ? `?language=${language}` : ""}`
      );
      const data = await res.json();
      setTutors(data);
    } catch (err) {
      console.error("Failed to fetch tutors:", err);
    }
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTutors(searchText);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto  bg-base-200 text-base-content">
      <h1 className="text-4xl font-bold mb-2 text-center">Find Your Tutors</h1>
      <p className="text-center mb-6">
        Explore our curated list of expert language tutors ready to help you
        learn, grow, and achieve your goals at your own pace.
      </p>

      <form onSubmit={handleSearch} className="mb-10 text-center">
        <input
          type="text"
          placeholder="Search by language..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border rounded-l w-64 max-w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-500 text-white rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="rounded-3xl p-4 shadow-lg flex flex-col sm:flex-row gap-6 bg-base-100"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-30 h-30 rounded-3xl"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{tutor.name}</h2>
              <p>
                <strong>Language:</strong> {tutor.language}
              </p>
              <p>
                <strong>Review:</strong> {tutor.review}
              </p>
              <p className=" mt-2">{tutor.description}</p>
              <Link to={`/tutors/${tutor._id}`}>
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
