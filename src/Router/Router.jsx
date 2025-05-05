import { createBrowserRouter } from "react-router";
import MainLayout from "../WebsiteLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/LogIn/Login";
import Register from "../Authentication/Register/Register";
import Loader from "../Component/Loader/Loader";
import Details from "../DetailsPage/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import TermsAndCondition from "../Component/TermsAndCondition/TermsAndCondition";
import UserProfile from "../Pages/UserProfile/UserProfile";

export const router=createBrowserRouter([
    
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            },
            {
                path:'/platform/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:()=>fetch('/card-data.json'),
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path:'/termscondition',
                Component:TermsAndCondition
            },
            {
                path:'/userdetails',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            }
        ]
    },
    {
        path:'*',
        Component:ErrorPage
    }
    
])