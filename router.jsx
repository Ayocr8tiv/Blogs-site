import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import Create from "./src/pages/Create";
import Blogs from "./src/pages/Blogs";



const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/create", element: <Create/>},
            {path: "/blogs", element: <Blogs/>}
        ]
    }
])

export default router