import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { store } from "../../../app/store";
import PokemonView from "../view";

// Setup MSW server
const server = setupServer(
    http.get("https://pokeapi.co/api/v2/pokemon/:id", ({ params }) => {
        if (params.id === "1") {
            return HttpResponse.json({
                name: "bulbasaur",
                height: 7,
                weight: 69,
                sprites: { front_default: "https://img.pokemonsprites/bulbasaur.png" },
                types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
            });
        }
        return new HttpResponse(null, { status: 404 });
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Helper renderer with router + store
const renderWithProviders = (route: string) => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path="/pokemon/:id" element={<PokemonView />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
};

describe("PokemonView", () => {
    it("shows loading initially", () => {
        renderWithProviders("/pokemon/1");
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("renders pokemon details after fetch", async () => {
        renderWithProviders("/pokemon/1");

        // header
        expect(await screen.findByRole("heading", { name: /bulbasaur/i })).toBeInTheDocument();

        // name row
        expect(await screen.findAllByText(/bulbasaur/i)).toHaveLength(2);

        // height & weight
        expect(await screen.findByText("7")).toBeInTheDocument();
        expect(await screen.findByText("69")).toBeInTheDocument();

        // types
        expect(await screen.findByText(/grass/i)).toBeInTheDocument();
        expect(await screen.findByText(/poison/i)).toBeInTheDocument();

        // image
        const image = await screen.findByRole("img", { name: /bulbasaur/i });
        expect(image).toHaveAttribute("src", "https://img.pokemonsprites/bulbasaur.png");
    });
    it("renders error state when API fails", async () => {
        server.use(
            http.get("https://pokeapi.co/api/v2/pokemon/:id", () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        renderWithProviders("/pokemon/999");
        expect(await screen.findByText(/error fetching data/i)).toBeInTheDocument();
    });
});
