import React, { useState, useEffect } from "react";
import { fetchStatistics } from "./api";

function StatisticsBox({ month }) {
  const [stats, setStats] = useState({ totalSales: 0, soldItems: 0, unsoldItems: 0 });

  useEffect(() => {
    fetchStatistics(month).then(setStats);
  }, [month]);

  return (
    <div>
      <p>Total Sales: ${stats.totalSales}</p>
      <p>Sold Items: {stats.soldItems}</p>
      <p>Unsold Items: {stats.unsoldItems}</p>
    </div>
  );
}

export default StatisticsBox;
