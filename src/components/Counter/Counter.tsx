import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Dodaj</button>
      <button onClick={decrement}>Usuń</button>
      <span>Liczba: {count}</span>
    </div>
  );
};
