import { createBrowserRouter, Outlet } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import pokemonRoutes from "./pokemon";
import HomePage from "../pages/home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                index: true,
                element: (
                    <HomePage />
                ),
            },
            // ✅ put pokemonRoutes here instead of inside index route
            pokemonRoutes,
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default routes;
