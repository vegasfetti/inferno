import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Root from "../pages/Root";
import CatalogPage from '../pages/CatalogPage'
import SingleProductPage from "../pages/SingleProductPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/catalog',
                element: <CatalogPage />
            },
            {
                path: '/catalog/:id',
                element: <SingleProductPage/>
            },
        ]
    }

])

export default router