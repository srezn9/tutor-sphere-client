import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/yNNfHs1n/Tutoring.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Empowering Minds, One Lesson at a Time</h1>
          <p className="py-6">
            Join TutorSphere – your gateway to expert tutors, personalized learning, and academic success across every subject and level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
