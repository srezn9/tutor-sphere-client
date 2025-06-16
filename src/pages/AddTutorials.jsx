import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTutorials = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTutorial = Object.fromEntries(formData.entries());

    // Parse numeric values
    newTutorial.price = parseFloat(newTutorial.price);
    newTutorial.review = parseInt(newTutorial.review);

    fetch("https://tutor-sphere-server.vercel.app/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Tutorial added successfully!",
            icon: "success",
            confirmButtonColor: "#9C27B0",
          }).then(() => {
            form.reset();
            navigate("/MyTutorials");
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4 bg-base-100 text-base-content">
      <Helmet>
              <title>AddTutorials || TutorSphere</title>
            </Helmet>
      <div className=" dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add New Tutorial
        </h2>
        <form onSubmit={handleAddTutorials} className="space-y-5">
          {/* auto-filled Name and Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value={user?.displayName || ""}
                name="name"
                readOnly
                className="w-full input input-bordered bg-gray-100 text-gray-600"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={user?.email || ""}
                name="email"
                readOnly
                className="w-full input input-bordered bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full input input-bordered"
              name="url"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Language</label>
            <select
              className="w-full select select-bordered"
              name="language"
              required
            >
              <option value="">Select a language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Bengali</option>
              <option>Arabic</option>
              <option>Chinese</option>
              <option>Italic</option>
              <option>German</option>
              <option>Japanese</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Price ($)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full input input-bordered"
              name="price"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              rows="4"
              placeholder="Write a short description..."
              className="w-full textarea textarea-bordered"
              name="description"
              required
            ></textarea>
          </div>

          {/* review */}
          <div>
            <label className="block mb-1 font-medium">Review</label>
            <input
              type="number"
              value="0"
              readOnly
              className="w-full input input-bordered bg-gray-100 text-gray-600"
              name="review"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-10"
              value="Add Tutorial"
            >
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
