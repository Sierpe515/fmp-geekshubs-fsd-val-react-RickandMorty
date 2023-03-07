import { createBrowserRouter } from "react-router-dom";
import { Home } from "../layout/Home";
import { Login } from "../layout/Login";
import { Register } from "../layout/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "home",
      element: <Home/>,
    },
    {
      path: "register",
      element: <Register/>,
    },
    {
      path: "login",
      element: <Login/>,
    },
  ]);