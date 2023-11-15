import { useEffect, useRef, useState } from "react";

type Data = {
  count: number;
  start: () => void;
  stop: () => void;
};

export const useCounterEffect = (): Data => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timer>();

  const start = () => {
    setIsRunning(true);
    //odpalanie interwalu i przypisanie do zmiennej
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
        console.log("interval count + 1");
      }, 1000);
    }
  };

  const stop = () => {
    // czyszczenie interwalu
    // za pomoca clearInterval
    if (intervalRef?.current && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    // zamontowanie komponentu
    console.log("mount component");
    // start();

    //odmontowanie komponentu z ekranu
    return () => {
      stop();
      console.log("unmount");
    };
  }, []);

  return {
    count,
    start,
    stop,
  };
};
