import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 text-base-content min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="relative group">
          <img
            src="https://i.postimg.cc/yNNfHs1n/Tutoring.jpg"
            alt="Tutoring"
            className="max-w-sm w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500 border-[6px] border-white ring-4 ring-blue-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Empowering Minds, <br className="hidden lg:block" /> One Lesson at a
            Time
          </h1>
          <p className="py-6 max-w-lg">
            Join <span className="text-sm font-bold text-teal-500">
              Tutor<span className="text-violet-500">Sphere</span>
            </span>
            – your gateway to expert tutors, personalized language learning, and
            confidence-building through every session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
