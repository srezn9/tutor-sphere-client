import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
 // Adjust the path if needed

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/tutors?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTutorials(data))
        .catch((err) => console.error("Failed to fetch tutorials", err));
    }
  }, [user?.email]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Tutorials</h2>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700">Image</th>
              <th className="px-4 py-3 font-medium text-gray-700">Language</th>
              <th className="px-4 py-3 font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 font-medium text-gray-700">
                Description
              </th>
              <th className="px-4 py-3 font-medium text-gray-700">Review</th>
              <th className="px-4 py-3 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tutorials.length > 0 ? (
              tutorials.map((tut) => (
                <tr key={tut._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={tut.url}
                      alt="Tutorial"
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{tut.language}</td>
                  <td className="px-4 py-3">${tut.price}</td>
                  <td className="px-4 py-3">{tut.description}</td>
                  <td className="px-4 py-3">{tut.review}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Update
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No tutorials added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
