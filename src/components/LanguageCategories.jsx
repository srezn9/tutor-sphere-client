import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "./Loader";

const LanguageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tutor-sphere-server.vercel.app/tutors")
      .then((res) => res.json())
      .then((data) => {
        const uniqueLanguages = [];
        const seen = new Set();

        data.forEach((tutor) => {
          if (!seen.has(tutor.language)) {
            seen.add(tutor.language);
            uniqueLanguages.push({
              id: tutor.id,
              title: tutor.language,
              logo: tutor.logo,
            });
          }
        });

        setCategories(uniqueLanguages.slice(0, 9));
         setLoading(false);
      });
  }, []);

   if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Language Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link to={`/findTutors/${cat.title}`} key={cat.title}>
            <div className="flex items-center justify-between border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-4">
                <img
                  src={cat.logo}
                  alt={cat.title}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <FaAngleRight className="text-violet-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategories;
