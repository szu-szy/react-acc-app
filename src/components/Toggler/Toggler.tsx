import { useState } from "react";

export const Toggler = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>toggler</h1>
      {isVisible && <h3>Napis chowany</h3>}
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Schowaj" : "Pokaz"}
      </button>
    </div>
  );
};
