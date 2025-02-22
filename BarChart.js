import React, { useState, useEffect } from "react";
import { fetchBarChart } from "./api";

function BarChart({ month }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBarChart(month).then(setData);
  }, [month]);

  return (
    <div>
      <h3>Price Range Distribution</h3>
      <ul>
        {data.map(([range, count]) => (
          <li key={range}>{range}: {count} items</li>
        ))}
      </ul>
    </div>
  );
}

export default BarChart;
