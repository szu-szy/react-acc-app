// Zadanie 5

import { useEffect, useRef, useState } from "react";

// Utworz komponent counter automatyczny który podnosi liczbe o 1 co 1 sekunde
export const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timer>();

  const start = () => {
    //odpalanie interwalu i przypisanie do zmiennej
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("interval count + 1");
    }, 1000);
  };

  const stop = () => {
    // czyszczenie interwalu
    // za pomoca clearInterval
    if (intervalRef?.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // zamontowanie komponentu
    // console.log("mount component");
    start();

    //odmontowanie komponentu z ekranu
    return () => {
      stop();
    };
  }, []);

  return (
    <>
      <h2>CounterEffect Exercise123</h2>
      <h3>Count: {count}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>stop</button>
    </>
  );
};
