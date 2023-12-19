import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import SignIn from "../authorization/SignIn";
import SignUp from "../authorization/SignUp";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
        ]
        
    }
])

export default router;