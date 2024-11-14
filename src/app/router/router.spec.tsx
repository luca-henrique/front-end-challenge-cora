import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainRouter } from "./router";

jest.mock("../../pages/home/home", () => () => <div>Home Page</div>);
jest.mock("../../pages/todo-list/todo-list", () => () => <div>Todo List Page</div>);
jest.mock("../../pages/login/login", () => () => <div>Login Page</div>);
jest.mock("../../pages/transactions/transactions", () => () => <div>Transactions Page</div>);

jest.mock("../../shared/components/atoms/route/private-route", () => ({
  PrivateRoute: ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = true;
    return isAuthenticated ? <>{children}</> : <div>Access Denied</div>;
  },
}));

describe("MainRouter", () => {
  it("deve renderizar a página Home para a rota '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRouter />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("deve renderizar a página Todo List para a rota '/todo'", () => {
    render(
      <MemoryRouter initialEntries={["/todo"]}>
        <MainRouter />
      </MemoryRouter>
    );
    expect(screen.getByText("Todo List Page")).toBeInTheDocument();
  });

  it("deve renderizar a página Login para a rota '/login'", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainRouter />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  it("deve renderizar a página Transactions para a rota '/transacoes' quando o usuário está autenticado", () => {
    render(
      <MemoryRouter initialEntries={["/transacoes"]}>
        <MainRouter />
      </MemoryRouter>
    );
    expect(screen.getByText("Transactions Page")).toBeInTheDocument();
  });
});
