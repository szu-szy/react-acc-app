import { useEffect, useState } from "react";

export const EffectComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  //// INFO OGOLNE O USEEFFECT
  // MOZEMY UZYWAC TYLE USEEFFECT ILE POTRZEBUJEMY

  // zamontowanie - metoda componentWillMount
  // posiada pusta tablice zaleznosci jako 2 parametr
  // moze sluzyc do pobierania danych
  useEffect(() => {
    console.log("zamontowano komponent");
    const intervalID = setInterval(() => {
      console.log("interval");
    }, 500);

    //odmontowanie - componentWillUnmount
    // return ktory odpowiada za odmontowanie komponentu uzywamy w razie potrzeby
    // w kazdym useEffect
    // nie ma znaczenia czy useEffect ma tablice zaleznosci czy tez nie
    return () => {
      console.log("komponent zostal odmontowany!");
      clearInterval(intervalID);
    };
  }, []);

  // aktualizacja - metoda componentDidUpdate
  // nie posiada tablicy zaleznosci jako drugi parametr
  // odczytuje kazdy render/kazda zmiane komponentu
  useEffect(() => {
    console.log("przeladowanie komponentu");
  });

  // aktualizacja z warunkiem - metoda componentDidUpdate
  // posiada tablice zaleznosci z nazwa zmiennej
  // aktualizuje sie tylko wtedy gdy okreslona zmienna zmieni wartosc
  useEffect(() => {
    console.log("wartosc count zostala zmienione");
  }, [count]);

  return (
    <div>
      <h5>Effect component, count: {count}</h5>
      <button onClick={() => setCount((prev) => prev + 1)}>Dodaj Count</button>
      <h5>Wartosc Value: {value}</h5>
      <button onClick={() => setValue((prev) => prev + 1)}>Dodaj value</button>
    </div>
  );
};
