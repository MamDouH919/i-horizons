import { lazy } from "react";
import PokemonView from "../pages/pokemon/view";

const PokemonList = lazy(
  () => import("../pages/pokemon/list")
);


const pokemonRoutes = {
  path: "pokemon",
  children: [
    {
      index: true,
      element: <PokemonList />,
    },
    {
      path: ":id",
      element: <PokemonView />,
    },
  ],
};

export default pokemonRoutes;
