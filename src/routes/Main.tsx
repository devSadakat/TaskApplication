import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MainLayout from "../Layoute/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> }, // renders home on the / route
            { path: "about", element: <About /> }, // renders about on the /about route
        ],
    },
]);

export default router;