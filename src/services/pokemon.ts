import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokemonView } from '../types/Pokemon-view';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemon: builder.query<{ results: { name: string; url: string }[] }, void>({
            query: () => 'pokemon?limit=20',
        }),
        getPokemonById: builder.query<PokemonView, string>({
            query: (id) => `pokemon/${id}`,
        }),
    }),
});

export const { useGetPokemonQuery, useGetPokemonByIdQuery } = pokemonApi;
