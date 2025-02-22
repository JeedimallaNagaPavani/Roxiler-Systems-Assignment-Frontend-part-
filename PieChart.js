import React, { useState, useEffect } from "react";
import { fetchPieChart } from "./api";

function PieChart({ month }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPieChart(month).then(setCategories);
  }, [month]);

  return (
    <div>
      <h3>Category Distribution</h3>
      <ul>
        {categories.map(([category, count]) => (
          <li key={category}>{category}: {count} items</li>
        ))}
      </ul>
    </div>
  );
}

export default PieChart;
