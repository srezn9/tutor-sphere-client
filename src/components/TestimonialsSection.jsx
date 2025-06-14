import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Nadia Hasan",
    role: "IELTS Aspirant",
    feedback:
      "TutorSphere connected me with an amazing English speaking tutor. My fluency and confidence have skyrocketed!",
    avatar: "https://i.postimg.cc/8CZqTW9n/medium-shot-woman-working-as-lawyer.jpg",
  },
  {
    name: "Rahim Chowdhury",
    role: "Language Enthusiast",
    feedback:
      "I always wanted to learn Japanese, and now I can hold basic conversations thanks to TutorSphere!",
    avatar: "https://i.postimg.cc/1R8Z5C90/178-1783316-bill-gates-hd-png-download.jpg",
  },
  {
    name: "Sadia Binte Karim",
    role: "Qur'anic Arabic Learner",
    feedback:
      "The Arabic tutor I found here is incredibly patient and knowledgeable. I'm finally understanding Qur'anic Arabic.",
    avatar: "https://i.postimg.cc/50jDyyM9/photorealistic-portrait-female-cowboy-sunset.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16  bg-base-200 text-base-content ">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Language Learners Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md p-6 space-y-4"
            >
              <FaQuoteLeft className="text-2xl text-blue-600" />
              <p className="">“{item.feedback}”</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
