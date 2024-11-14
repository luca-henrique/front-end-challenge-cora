import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../pages/home/home"));
const TodoList = lazy(() => import("../../pages/todo-list/todo-list"));
const Login = lazy(() => import("../../pages/login/login"));
const Transactions = lazy(
  () => import("../../pages/transactions/transactions")
);

import {
  PrivateRoute,
  PublicRoute,
} from "../../shared/components/atoms/route/private-route";
import { useAuthStore } from "../store/use-auth-store";

export const MainRouter = () => {
  const isAuth = useAuthStore((state) => state.token);

  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={

              <Home />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/todo"
            element={
              <TodoList />
            }
          />
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
