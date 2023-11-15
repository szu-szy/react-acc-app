import { useEffect, useState } from "react";

export const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("component mount");

    return () => {
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    console.log("render!");
  });
  return (
    <div>
      <h2>Komponent klasowy {count}</h2>
      <button onClick={increment}>Dodaj</button>
    </div>
  );
};
