import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    }
])

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes