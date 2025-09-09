import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { setupServer } from "msw/node"
import { http, HttpResponse } from "msw"
import PokemonList from "../list"
import { store } from "../../../app/store"

// Mock API response
const server = setupServer(
    http.get("https://pokeapi.co/api/v2/pokemon", () => {
        return HttpResponse.json({
            results: [
                { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
                { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            ],
        })
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Helper render function
const renderWithProviders = (ui: React.ReactNode) => {
    return render(
        <Provider store={store}>
            <MemoryRouter>{ui}</MemoryRouter>
        </Provider>
    )
}

describe("PokemonList", () => {
    it("renders loading initially", () => {
        renderWithProviders(<PokemonList />)
        expect(screen.getByText(/loading/i)).toBeInTheDocument()
    })

    it("renders list of pokemons after fetch", async () => {
        renderWithProviders(<PokemonList />)

        expect(await screen.findByText(/pikachu/i)).toBeInTheDocument()
        expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument()
    })

    it("renders error state when API fails", async () => {
        server.use(
            http.get("https://pokeapi.co/api/v2/pokemon", () => {
                return HttpResponse.text("Internal Server Error", { status: 500 })
            })
        )

        renderWithProviders(<PokemonList />)

        expect(
            await screen.findByText(/error fetching data/i)
        ).toBeInTheDocument()

        expect(
            await screen.findByRole("link", { name: /back to home/i })
        ).toBeInTheDocument()
    })

    it("renders details buttons with correct links", async () => {
        renderWithProviders(<PokemonList />)

        const detailsButtons = await screen.findAllByText(/details/i)
        expect(detailsButtons).toHaveLength(2)

        const links = await screen.findAllByRole("link", { name: /details/i })
        expect(links[0]).toHaveAttribute("href", "/pokemon/25")
        expect(links[1]).toHaveAttribute("href", "/pokemon/1")
    })
})
