import { Child } from "../Child/Child";

export const Parent = () => {
  const textValue = "child text test";
  const nameValue = 1111;

  return (
    <div>
      <h2>Parent</h2>
      <Child text={textValue} name={nameValue} />
    </div>
  );
};
