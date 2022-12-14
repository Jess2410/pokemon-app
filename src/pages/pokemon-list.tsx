import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "../models/pokemon";
import PokemonCard from "../components/pokemonCard";
import PokemonService from "../services/pokemon-service";
import { Link } from "react-router-dom";
import PokemonSearch from "../components/pokemonSearch";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
    // l'utilisation du service remplace cette requête GET :
    // fetch("http://localhost:3002/pokemons")
    //   .then((response) => response.json())
    //   .then((pokemons) => {
    //     setPokemons(pokemons);
    //   });
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Link
          className=" btn-floating btn-large waves-effect waves-light red z-depth-3"
          style={{ position: "fixed", bottom: "25px", right: "25px" }}
          to={"/pokemon/add"}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
