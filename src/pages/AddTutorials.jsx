import React from 'react';

const AddTutorials = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Add New Tutorial
        </h2>
        <form className="space-y-5">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="user@example.com"
                className="w-full input input-bordered"
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
              required
            />
          </div>

          {/* Language */}
          <div>
            <label className="block mb-1 font-medium">Language</label>
            <select className="w-full select select-bordered" required>
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
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-10">
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default AddTutorials;