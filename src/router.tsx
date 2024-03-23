import {createBrowserRouter, Navigate} from "react-router-dom";
import path from "node:path";
import {MainLayout} from "./layouts";
import {CarsPage} from "./pages/CarsPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'login'}/>
            },
            {
                path:'cars', element:<CarsPage/>
            },
            {
                path:'login', element:<LoginPage/>
            },
            {
                path:'register', element:<RegisterPage/>
            }
        ]
    }
])

export {
    router
}