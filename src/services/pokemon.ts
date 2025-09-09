import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemons: builder.query<{ results: { name: string; url: string }[] }, void>({
            query: () => 'pokemon?limit=20',
        }),
        getPokemonById: builder.query<any, string>({
            query: (id) => `pokemon/${id}`,
        }),
    }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;
