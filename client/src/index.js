import ReactDom from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/home';
import "./index.css";
import SignUp from './views/Signup/Sign';
import Login from './views/Login/Login';


const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <Home/>
    },
    {
        "path": "/signup",
        "element": <SignUp/>
    },
    {
        "path": "/login",
        "element": <Login/>
    }
])

root.render(
    <RouterProvider router={router}/>
)
