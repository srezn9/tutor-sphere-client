import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = async () => {
    const bookingInfo = {
      tutorId: tutor._id,
      image: tutor.image,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      email: user?.email, // current logged in user
    };

    const res = await fetch("https://tutor-sphere-server.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    });

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Booking Successful!",
        text: `You've booked ${tutor.name}.`,
      }).then(() => {
        navigate("/myBookedTutors");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Booking Failed!",
        text: "Please try again later.",
      });
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={tutor.image} alt={tutor.name} className="rounded-3xl mb-4" />
      <h1 className="text-3xl font-bold">{tutor.name}</h1>
      <p>
        <strong>Language:</strong> {tutor.language}
      </p>
      <p>
        <strong>Review:</strong> {tutor.review}
      </p>
      <p>
        <strong>Price:</strong> ${tutor.price}
      </p>
      <p className="my-4">{tutor.description}</p>
      <button
        onClick={handleBooking}
        className="mt-4 px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Book Now
      </button>
    </div>
  );
};

export default TutorDetails;
