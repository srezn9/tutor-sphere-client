import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddTutorials = () => {
  const navigate = useNavigate();
  const handleAddTutorials = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('after adding tutor to db',data);
        if (data.insertedId) {
          Swal.fire({
            title: "Tutorial added successfully!",
            icon: "success",
            confirmButtonColor: "#9C27B0",
            draggable: true,
          }).then(() => {
            form.reset();
            navigate("/findTutors");
          });
        }
      });
  };
  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Add New Tutorial
        </h2>
        <form onSubmit={handleAddTutorials} className="space-y-5">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full input input-bordered"
                name="name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="user@example.com"
                className="w-full input input-bordered"
                name="email"
              />
            </div>
          </div>

          {/* Image */}
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

          {/* Language */}
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

          {/* Price */}
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

          {/* Description */}
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
          <div>
            <label className="block mb-1 font-medium">Review</label>
            <input
              type="number"
              value="0"
              readOnly
              className="w-full input input-bordered"
              name="review"
            />
          </div>

          {/* Submit */}
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
