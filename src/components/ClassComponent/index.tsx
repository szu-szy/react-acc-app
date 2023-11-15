import React from "react";

type CounterState = {
  count: number;
  value: string;
};

type Props = {
  text: string;
};

// zapis <Props, CounterState> oznacza <PropsType, StateType>
// komponent klasowy powinien dziedziczyc po React.Component
// aby miec dostep do props i state
export class ClassComponent extends React.Component<Props, CounterState> {
  // I opcja utworzenia stanu komponentu
  // state = {
  //   count: 0,
  // };

  // jezeli nie zapiszemy jawnie wywolania konstruktora - wywola sie domyslnie pusty
  constructor(props: any) {
    super(props);
    // II opcja utworzenia stanu komponentu
    this.state = {
      count: 0,
      value: "tekst",
    };
    console.log("constructor", this.props.text);
    // dotyczy zapisu przy uzyciu function -> increment(){}
    // this.increment = this.increment.bind(this);
  }

  // jaka jest roznica miedzy funkcja strzalkowa () => {}, a function (){}

  // increment() {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // }

  increment = () => {
    // aktualizowanie stanu
    // zapis ponizej nie przeladuje nam komponentu - komponent nie wie, ze stan zostal zmieniony
    // this.state.cout = 1

    // sluzy do aktualizacji stanu - powoduje on rerender komponentu
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Metoda wywoływana po tym, jak komponent został dodany do drzewa DOM
  componentDidMount() {
    // mozemy pobrac dane
    console.log("component mount");
  }

  // Metoda wywoływana przed każdym ponownym renderowaniem komponentu
  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("componentDidUpdate - Komponent został zaktualizowany.");
    console.log("Poprzedni stan:", prevState);
    console.log("Aktualny stan:", this.state);
  }

  // Metoda wywoływana przed usunięciem komponentu z drzewa DOM
  componentWillUnmount() {
    // clearInterval()
    console.log("componentWillUnmount - Komponent zostanie usunięty.");
  }

  // kazdy komponent klasowy musi miec w sobie uzycie metody render()
  render() {
    return (
      <div>
        <h2>Komponent klasowy {this.state.count}</h2>
        <button onClick={this.increment}>Dodaj</button>
      </div>
    );
  }
}
