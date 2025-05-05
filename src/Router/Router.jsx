import { createBrowserRouter } from "react-router";
import MainLayout from "../WebsiteLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/LogIn/Login";
import Register from "../Authentication/Register/Register";

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
            }
        ]
    }
    
])