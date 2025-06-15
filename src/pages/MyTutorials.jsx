import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchTutorials = () => {
    if (user?.email) {
      fetch(`https://tutor-sphere-server.vercel.app/tutors?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTutorials(data))
        .catch((err) => console.error("Failed to fetch tutorials", err));
    }
  };

  useEffect(() => {
    fetchTutorials();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This tutorial will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await fetch(`https://tutor-sphere-server.vercel.app/tutors/${id}`, {
        method: "DELETE",
      });

      fetchTutorials();

      Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTutor = {
      url: form.url.value,
      language: form.language.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
    };

    const res = await fetch(
      `https://tutor-sphere-server.vercel.app/tutors/${selectedTutor._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTutor),
      }
    );

    if (res.ok) {
      Swal.fire(
        "Updated!",
        "Tutorial has been updated successfully.",
        "success"
      );
      setSelectedTutor(null); // Close modal
      fetchTutorials(); // Refresh data
    } else {
      Swal.fire("Error!", "Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto  bg-base-200 text-base-content">
      <h2 className="text-2xl font-bold mb-4">My Tutorials</h2>
      <div className="overflow-x-auto shadow rounded-lg border bg-base-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm text-left">
          <thead className=" bg-base-300">
            <tr>
              <th className="px-4 py-3 font-medium">Image</th>
              <th className="px-4 py-3 font-medium">Language</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Review</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tutorials.length > 0 ? (
              tutorials.map((tut) => (
                <tr key={tut._id}>
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
                    <button
                      onClick={() => setSelectedTutor(tut)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(tut._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
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

      {/* Modal */}
      {selectedTutor && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="p-6 rounded-lg w-full max-w-lg shadow-md space-y-4"
          >
            <h3 className="text-xl font-semibold">Update Tutorial</h3>

            <input
              type="text"
              value={selectedTutor.name}
              disabled
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              value={selectedTutor.email}
              disabled
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="url"
              defaultValue={selectedTutor.url}
              placeholder="Image URL"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="language"
              defaultValue={selectedTutor.language}
              placeholder="Language"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              name="price"
              defaultValue={selectedTutor.price}
              placeholder="Price"
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              name="description"
              defaultValue={selectedTutor.description}
              placeholder="Description"
              className="w-full border px-3 py-2 rounded"
            ></textarea>
            <input
              type="number"
              value={selectedTutor.review}
              disabled
              className="w-full border px-3 py-2 rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setSelectedTutor(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
