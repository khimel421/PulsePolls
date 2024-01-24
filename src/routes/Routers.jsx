import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import SignIn from "../authorization/SignIn";
import SignUp from "../authorization/SignUp";
import DashBoard from "../pages/DashBoard";
import CreateSurvey from "../userDashBoard/CreateSurvey";
import Mysurvey from "../userDashBoard/Mysurvey";
import DetailsPage from "../pages/DetailsPage";
import SurveyPage from "../pages/SurveyPage";
import UpdateSurvey from "../userDashBoard/UpdateSurvey";
import AllUsers from "../adminDashboard/AllUsers";
import SurveyRequests from "../adminDashboard/SurveyRequests";
import SurveyResponse from "../userDashBoard/SurveyResponse";
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
            },
            {
                path:"/details/:id",
                element:<DetailsPage></DetailsPage>
            },
            {
                path:"/survey",
                element:<SurveyPage></SurveyPage>
            }
            
        ]
    },
    {
        path: "dashboard",
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:"createSurvey",
                element:<CreateSurvey></CreateSurvey>
            },
            {
                path:"mySurvey",
                element:<Mysurvey></Mysurvey>
            },
            {
                path:"mySurvey/updateSurvey/:id",
                element:<UpdateSurvey></UpdateSurvey>
            },
            {
                path:"users",
                element:<AllUsers></AllUsers>
            },
            {
                path: "surveyRequest",
                element:<SurveyRequests></SurveyRequests>
            },
            {
                path:"surveyResponse",
                element:<SurveyResponse></SurveyResponse>
            }
        ]
    }
])

export default router;