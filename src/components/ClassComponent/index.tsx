import React from "react";

type CounterState = {
  count: number;
};

// zapis <{}, CounterState> oznacza <PropsType, StateType>
export class ClassComponent extends React.Component<{}, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Metoda wywoływana po tym, jak komponent został dodany do drzewa DOM
  componentDidMount() {
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
    console.log("componentWillUnmount - Komponent zostanie usunięty.");
  }

  render() {
    return (
      <div>
        <h2>Komponent klasowy {this.state.count}</h2>
        <button onClick={this.increment}>Dodaj</button>
      </div>
    );
  }
}
