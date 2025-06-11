import React from "react";

const StatSection = () => {
  return (
   <div className="text-center my-20">
     <div className="stats stats-vertical lg:stats-horizontal shadow bg-white space-x-10">
      <div className="stat">
        <div className="stat-title">Tutors</div>
        <div className="stat-value">31K</div>
      </div>

      <div className="stat">
        <div className="stat-title">Reviews</div>
        <div className="stat-value">4,200</div>
      </div>

      <div className="stat">
        <div className="stat-title">Languages</div>
        <div className="stat-value">1,200</div>
      </div>
      <div className="stat">
        <div className="stat-title">Users</div>
        <div className="stat-value">1,200</div>
      </div>
    </div>
   </div>
  );
};

export default StatSection;
