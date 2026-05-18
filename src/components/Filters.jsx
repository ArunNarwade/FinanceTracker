import { useState } from "react";

export default function Filters({ setFilter }) {
  const [active, setActive] = useState("all");

  const changeFilter = (type) => {
    setActive(type);
    setFilter(type);
  };

  return (
    <div className="filters">
      <button className={active==="all" ? "active":""} onClick={()=>changeFilter("all")}>All</button>
      <button className={active==="income" ? "active":""} onClick={()=>changeFilter("income")}>Income</button>
      <button className={active==="expense" ? "active":""} onClick={()=>changeFilter("expense")}>Expense</button>
    </div>
  );
}