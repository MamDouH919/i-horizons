import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        I-Horizons
      </h1>
      <Link to="/pokemon">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
          Go to Pokemon
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
