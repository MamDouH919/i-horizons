"use client"

import { Link } from "react-router-dom"
import ErrorFetching from "../../components/ErrorFetching"
import Loading from "../../components/Loading"
import { useGetPokemonsQuery } from "../../services/pokemon"
import HeaderTitle from "./components/headerTitle"

interface Pokemon {
    name: string
    url: string
}

const PokemonList = () => {
    const { data, isLoading, error } = useGetPokemonsQuery()

    const getPokemonId = (url: string) => {
        const parts = url.split("/")
        return parts[parts.length - 2]
    }

    const getPokemonSprite = (url: string) => {
        const id = getPokemonId(url)
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <ErrorFetching />
        )
    }

    return (
        <div className="bg-white">
            <HeaderTitle title={"Poke React"} to="/" />
            {data?.results.map((pokemon: Pokemon, index: number) => (
                <div key={pokemon.name}>
                    <div className="flex items-center p-4 hover:bg-gray-50 transition-colors">
                        <div className="w-16 h-16 flex-shrink-0 mr-4">
                            <img
                                src={getPokemonSprite(pokemon.url) || "/placeholder.svg"}
                                alt={pokemon.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Pokemon Name */}
                        <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900 capitalize">{pokemon.name}</h3>
                        </div>
                        <div>
                            <Link to={`/pokemon/${getPokemonId(pokemon.url)}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Divider - don't show after last item */}
                    {index < data.results.length - 1 && <div className="border-b border-gray-200 mx-4"></div>}
                </div>
            ))}
        </div>
    )
}

export default PokemonList
