import { FormEvent, useState } from "react";

// metody tablicowe (iteracyjne) w js

// nie zwracaja tablicy
// forEach - iteruje

// zwracaja tablice
// filter - filtruje na bazie warunku .filter(item => item.price > 5)
// map -zwraca nowa tablice / mamy mozliwosc modyfikacji elementow

// reduce - zwraca wartosc

// .map(item => item.price > 5) -> [true, true]
// .filter(item => item.price > 5) -> [{}, {}]

// tab === []

// truly - 1, true, []

// falsy - 0, false, null, undefined, NaN, ''
// if() - zwracaja zawsze false

// form.addEventListener('submit')

const DEFAULT_TAB = [
  { id: "item-1", text: "text item 1" },
  { id: "item-2", text: "text item 2" },
];

export const List = () => {
  const [tab, setTab] = useState(DEFAULT_TAB);
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.length > 0) {
      const newItem = {
        id: "nowe id",
        text: name,
      };
      setTab((prevState) => [...prevState, newItem]);
    }
  };

  return (
    <div>
      <h1>List</h1>
      <h3>Formularz</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          imie:
          <input
            required
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Dodaj</button>
      </form>
      <h3>Lista</h3>
      {tab.length > 0 ? (
        <ul>
          {tab.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
