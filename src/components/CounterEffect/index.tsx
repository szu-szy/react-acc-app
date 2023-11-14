// Zadanie 5
// Utworz komponent counter automatyczny który podnosi liczbe o 1 co 1 sekunde
import { useCounterEffect } from "./hooks/useCounterEffect";
export const CounterEffect = () => {
  const { count, start, stop } = useCounterEffect();

  return (
    <>
      <h2>CounterEffect Exercise123</h2>
      <h3>Count: {count}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>stop</button>
    </>
  );
};
