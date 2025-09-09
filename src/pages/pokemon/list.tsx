import ErrorFetching from "../../components/ErrorFetching"
import Loading from "../../components/Loading"
import { useGetPokemonQuery } from "../../services/pokemon"
import HeaderTitle from "./components/HeaderTitle"
import { getPokemonId, getPokemonSprite } from "./helperFun"
import type { Pokemon } from "../../types/pokemon-list"
import CustomBtn from "../../components/CustomBtn"
import { Fragment } from "react"

const PokemonList = () => {
    const { data, isLoading, isError } = useGetPokemonQuery()
    return (
        <div className="bg-white">
            <HeaderTitle title={"Poke React"} to="/" />
            <Loading show={isLoading} />
            <ErrorFetching show={isError} />
            {data?.results.map((pokemon: Pokemon, index: number) => (
                <Fragment key={pokemon.name}>
                    <div className="flex items-center p-4 hover:bg-gray-50 transition-colors" key={pokemon.name}>
                        <div className="w-16 h-16 flex-shrink-0 mr-4">
                            <img
                                src={getPokemonSprite(pokemon.url)}
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
                        <CustomBtn to={`/pokemon/${getPokemonId(pokemon.url)}`} />
                    </div>
                    {/* Divider - don't show after last item */}
                    {index < data.results.length - 1 && <div className="border-b border-gray-200 mx-4"></div>}
                </Fragment>
            ))}
        </div>
    )
}

export default PokemonList
