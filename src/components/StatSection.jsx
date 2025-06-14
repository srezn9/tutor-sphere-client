import React, { useEffect, useState } from "react";

const StatSection = () => {
  const [stats, setStats] = useState({
    tutors: 0,
    reviews: 0,
    languages: 0,
    users: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="text-center my-20 bg-base-100 text-base-content ">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 space-x-10">
        <div className="stat">
          <div className="stat-title">Tutors</div>
          <div className="stat-value">{stats.tutors}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">{stats.reviews}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Languages</div>
          <div className="stat-value">{stats.languages}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
