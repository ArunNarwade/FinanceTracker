export default function TransactionList({ transactions, filter, deleteTransaction }) {

  const filtered = transactions
    .map((txn, index) => ({ ...txn, index }))
    .filter(txn => {
      if (filter === "all") return true;
      return filter === "income" ? txn.amount > 0 : txn.amount < 0;
    });

  return (
    <ul id="transactionList">
      {filtered.map(txn => (
        <li key={txn.index} className={`transaction ${txn.amount>0 ? "income":"expense"}`}>
          <div>
            <span>{txn.description}</span><br/>
            <span className="date">{txn.date}</span>
          </div>

          <div>
            ₹{txn.amount.toFixed(2)}
            <button className="delete-btn" onClick={()=>deleteTransaction(txn.index)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}