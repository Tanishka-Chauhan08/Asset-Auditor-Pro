import React from "react";

const StatsCard = ({ title, value, color }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 transition-all">
      <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
        {title}
      </p>
      <h3 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h3>
    </div>
  );
};

export default StatsCard;
