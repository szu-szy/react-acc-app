// proste
// number np: 1,2,3
// string np: 'test'
// boolean: true / false

// zlozone
// obiekty i tablice

// destrukturyzacja
// const obj = {
//     value: 1,
//     text: 'text',
//     valueSecond: 3,
// }

// const {value, text, valueSecond} = obj;

// console.log(value, text, valueSecond)

// tworzenie typu
type ChildProps = {
  text: string;
  name: number;
};

export const Child = ({ text, name }: ChildProps) => {
  // const {text} = props;
  return (
    <>
      <h2>Child</h2>
      <h3>text: {text}</h3>
      <h4>name value: {name}</h4>
    </>
  );
};
