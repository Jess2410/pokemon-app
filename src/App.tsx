import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/data-pokemons";
// const name: String = "React";

const App: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <h4>Il y a {pokemons.length} pokémons dans le Pokédex !</h4>
    </div>
  );
};

export default App;
