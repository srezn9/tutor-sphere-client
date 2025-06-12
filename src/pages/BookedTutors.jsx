import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const BookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `http://localhost:3000/bookings?email=${user.email}`
        );
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, [user]);

  const handleReview = async (tutorId) => {
    if (!tutorId) return;

    try {
      const res = await fetch(
        `http://localhost:3000/tutors/${tutorId}/review`,
        {
          method: "PATCH",
        }
      );

      if (res.ok) {
        Swal.fire("Thanks!", "Your review has been added.", "success");

        
        setBookings((prev) =>
          prev.map((item) =>
            item.tutorId === tutorId
              ? { ...item, review: (item.review || 0) + 1 }
              : item
          )
        );
      } else {
        Swal.fire("Oops!", "Could not add review. Try again later.", "error");
      }
    } catch (error) {
      console.error("Review error:", error);
      Swal.fire("Oops!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Booked Tutors</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((tutor) => (
            <div
              key={tutor.tutorId}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                <img 
                src={tutor.image}
                alt={tutor.name}
                className="w-50 p-4 rounded-3xl"
              />
                </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {tutor.name}
                </h2>
                <p className="text-gray-600">
                  <span className="font-medium">Language:</span>{" "}
                  {tutor.language}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Price:</span> ${tutor.price}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Reviews:</span>{" "}
                  {tutor.review || 0}
                </p>
                <button
                  onClick={() => handleReview(tutor.tutorId)}
                  className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Leave a Review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedTutors;
