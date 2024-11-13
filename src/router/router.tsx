import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home-page/home"));
const TodoList = lazy(() => import("../pages/todo-list/todo-list"));
const Login = lazy(() => import("../pages/login/login"));
const Transactions = lazy(() => import("../pages/transactions/transactions"));

import { PrivateRoute } from "../components/atoms/private-route/private-route";
import { useStore } from "../store/auth";

export const MainRouter = () => {
  const isAuth = useStore((state) => state.token);

  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route path="/todo" element={<TodoList />} />
          <Route
            path="/transacoes"
            element={
              <PrivateRoute isAuthenticated={!!isAuth}>
                <Transactions />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};
