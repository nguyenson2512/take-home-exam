import React from "react";

function StatisticItem({ value, label }) {
  return (
    <div className="statistic-item">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default StatisticItem;
