import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import StatisticsBox from "./StatisticsBox";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import MonthDropdown from "./MonthDropdown";

function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div>
      <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <StatisticsBox month={selectedMonth} />
      <TransactionsTable month={selectedMonth} />
      <BarChart month={selectedMonth} />
      <PieChart month={selectedMonth} />
    </div>
  );
}

export default Dashboard;

