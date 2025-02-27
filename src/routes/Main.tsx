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
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
        ],
    },
]);

export default router;