import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { Todo } from "../pages/Todo";
import { TransectionList } from "../pages/TransectionList/transection-list";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },

  {
    path: "/transacoes",
    element: <TransectionList />,
  },

]);


export const Router = () => <RouterProvider router={router} />
