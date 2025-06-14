import React from "react";
import {
  FaChalkboardTeacher,
  FaGlobeAmericas,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
    title: "Native Language Tutors",
    description:
      "Learn from fluent, native speakers who provide authentic pronunciation, grammar, and cultural context.",
  },
  {
    icon: <FaComments className="text-4xl text-blue-600" />,
    title: "Conversational Practice",
    description:
      "Build real-world speaking skills through interactive conversation sessions and role-playing.",
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-blue-600" />,
    title: "Multilingual Support",
    description:
      "Choose from a wide variety of languages including English, Arabic, Japanese, Spanish, and more.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose TutorSphere?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
