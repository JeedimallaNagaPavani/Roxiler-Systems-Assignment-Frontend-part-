const API_BASE = "http://localhost:5000";

export async function fetchTransactions(month, search = "", page = 1) {
  const res = await fetch(`${API_BASE}/transactions?month=${month}&search=${search}&page=${page}`);
  return res.json();
}

export async function fetchStatistics(month) {
  const res = await fetch(`${API_BASE}/statistics?month=${month}`);
  return res.json();
}

export async function fetchBarChart(month) {
  const res = await fetch(`${API_BASE}/barchart?month=${month}`);
  return res.json();
}

export async function fetchPieChart(month) {
  const res = await fetch(`${API_BASE}/piechart?month=${month}`);
  return res.json();
}
