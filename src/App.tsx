import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import PageNotFound from "./pages/page-not-found";
import PokemonAdd from "./pages/pokemon-add";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonList from "./pages/pokemon-list";
import PrivateRoute from "../src/PrivateRoute";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">
            Pokédex
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="pokemons/add" element={<PokemonAdd />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />
          <Route path="pokemons/edit/:id" element={<PokemonEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
