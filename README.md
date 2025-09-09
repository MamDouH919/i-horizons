# Poke React App

A simple React + TypeScript application that lists Pokemons from the [PokeAPI](https://pokeapi.co/).  
Built using **Redux Toolkit** and **RTK Query** for state management and data fetching.  

Users can:
- View a list of Pokemons.
- Click on a Pokemon to see its details.
- Persistently store the fetched list.
- Run the app against different API base URLs.

This project includes **unit and integration tests** with at least **60% coverage** to ensure correctness and reliability.

---

## 🚀 Features
- ⚛️ React 18 with TypeScript  
- 📦 Redux Toolkit & RTK Query  
- 🧪 Unit & Integration Tests with React Testing Library + MSW  
- ✅ Coverage requirement: 60%+  
- 🌐 Configurable `BASE_API_URL`  

---

## 📂 Project Structure
src/
app/
  store.ts
components/
  Loading.tsx
  ErrorFetching.tsx
pages/
  pokemon/
    list.tsx
    view.tsx
  test/
    PokemonList.test.tsx
    PokemonView.test.tsx
services/
    pokemon.ts


---

## 🔧 Prerequisites
- Node.js `>=18`
- npm `>=9`

---

## 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/MamDouH919/i-horizons.git
cd i-horizons

# Install dependencies
npm install

▶️ Running the App

You can configure the API base URL using an environment variable.
# Create .env file
echo "VITE_API_URL=https://pokeapi.co/api/v2" > .env

Start the development server:
  - npm run dev


Build for production:
 - npm run build


Preview production build:
  - npm run preview

🧪 Testing

Run unit and integration tests with coverage:
  - npm run test


Check coverage report:
open coverage/lcov-report/index.html


🖼️ Example Screens

Pokemon List Page – Displays list of Pokemons with images.
Pokemon View Page – Shows detailed Pokemon info (name, height, weight, types, sprite).