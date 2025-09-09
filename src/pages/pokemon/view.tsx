import ErrorFetching from '../../components/ErrorFetching';
import Loading from '../../components/Loading';
import { useGetPokemonByIdQuery } from '../../services/pokemon';
import { useParams } from 'react-router-dom';
import HeaderTitle from './components/HeaderTitle';

const PokemonView = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetPokemonByIdQuery(id!);

    if (isLoading) {
        return <Loading show={isLoading} />;
    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className="w-80 overflow-hidden bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Blue header */}
                <HeaderTitle title={data?.name ?? "..."} to='/pokemon' />
                <ErrorFetching show={isError} />
                {/* Pokemon image */}
                <div className="flex justify-center py-8 bg-white">
                    <img src={data?.sprites.front_default || "/placeholder.svg"} alt={data?.name} className="w-48 h-48 object-contain" />
                </div>

                {/* Stats section */}
                <div className="px-6 pb-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <span className="text-gray-700 font-semibold text-lg">Name</span>
                            <span className="text-gray-600 text-lg lowercase">{data?.name}</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <span className="text-gray-700 font-semibold text-lg">Height</span>
                            <span className="text-gray-600 text-lg">{data?.height}</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <span className="text-gray-700 font-semibold text-lg">Weight</span>
                            <span className="text-gray-600 text-lg">{data?.weight}</span>
                        </div>

                        <div className="flex justify-between items-start py-3">
                            <span className="text-gray-700 font-semibold text-lg">Types</span>
                            <div className="text-right">
                                {data?.types.map((type: any, index: number) => (
                                    <div key={index} className="text-gray-600 text-lg">
                                        {type.type.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonView;
