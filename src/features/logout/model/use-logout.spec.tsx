import { renderHook } from "@testing-library/react";
import { useLogout } from "./use-logout";
import { useNavigate } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


describe("useLogout", () => {
  const mockNavigate = useNavigate() as jest.Mock;

  beforeEach(() => {
    localStorage.setItem("token", "fakeToken");
    mockNavigate.mockClear();
  });

  it("deve limpar o localStorage e redirecionar para a página inicial ao fazer logout", () => {
    const { result } = renderHook(() => useLogout());

    result.current.logoutAccount();

    expect(localStorage.getItem("token")).toBeNull();

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
