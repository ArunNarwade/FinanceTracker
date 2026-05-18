import { useState, useEffect } from "react";
import TransactionForm from "../components/TransactionForm";
import Filters from "../components/Filters";
import TransactionList from "../components/TransactionList";
import "../finance.css";

export default function Finance() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const balance = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updated = [...transactions];
    updated.splice(index, 1);
    setTransactions(updated);
  };

  return (
    <div className="container">
      <h1>💰 Personal Finance Tracker</h1>

      <div className="balance">
        <h2>Balance: ₹{balance.toFixed(2)}</h2>
      </div>

      <TransactionForm addTransaction={addTransaction} />
      <Filters setFilter={setFilter} />

      <TransactionList
        transactions={transactions}
        filter={filter}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}