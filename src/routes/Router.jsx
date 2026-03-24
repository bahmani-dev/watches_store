import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { BestSells } from "../pages/BestSells";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Feach from "../pages/Feach";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/best-sells",
    element: <BestSells />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/feacherd",
    element:<Feach/>
  }

]);

export default router;
