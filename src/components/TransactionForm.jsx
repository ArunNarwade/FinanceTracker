import { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc || !amt) return;

    addTransaction({
      description: desc,
      amount: parseFloat(amt),
      date: new Date().toLocaleString()
    });

    setDesc("");
    setAmt("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount (+income / -expense)"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}