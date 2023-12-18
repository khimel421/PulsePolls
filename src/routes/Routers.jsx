import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
        ]
        
    }
])

export default router;