import React, { useState, useEffect } from "react";
import { fetchTransactions } from "./api";

function TransactionsTable({ month }) {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTransactions(month, search, page).then(setTransactions);
  }, [month, search, page]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.title}</td>
              <td>{txn.description}</td>
              <td>${txn.price}</td>
              <td>{txn.dateOfSale}</td>
              <td>{txn.sold ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
}

export default TransactionsTable;
