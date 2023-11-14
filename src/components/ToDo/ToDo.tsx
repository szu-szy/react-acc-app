import { useState } from "react";

const defaultTab = [
  { id: "item-1", text: "text item 1" },
  { id: "item-2", text: "text item 2" },
  { id: "item-3", text: "text item 3" },
];

export const ToDo = () => {
  const [list, setList] = useState(defaultTab);

  return (
    <>
      <h2>ToDo List</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
