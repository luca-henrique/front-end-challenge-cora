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
} from "../../shared/components/atoms/route/private-route";


export const MainRouter = () => {

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
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};
