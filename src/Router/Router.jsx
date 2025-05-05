import { createBrowserRouter } from "react-router";
import MainLayout from "../WebsiteLayout/MainLayout";
import Home from "../Pages/Home/Home";

export const router=createBrowserRouter([
    
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/',
                Component:Home
            }
        ]
    }
    
])