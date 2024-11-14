import { renderHook, act } from "@testing-library/react-hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginModel } from "./login.model";
import { signInRequest } from "../api/auth";
import { useAuthStore } from "../../../app/store/use-auth-store";

jest.mock("../../../app/store/use-auth-store");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
jest.mock("../api/auth");

describe("useLoginModel", () => {
  const mockNavigate = jest.fn();
  const mockSignIn = jest.fn();

  beforeAll(() => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      login: mockSignIn,
      token: "fakeToken",
    });

    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve atualizar o token e redirecionar em caso de sucesso no login", async () => {
    (signInRequest as jest.Mock).mockResolvedValue({
      data: { token: "fakeToken" },
    });
    const { result, waitForNextUpdate } = renderHook(() => useLoginModel());

    await act(async () => {
      result.current.handleSubmitLoginForm({
        //@ts-ignore
        cpf: "12345678900",
        password: "password123",
      });
    });

    await waitForNextUpdate();

    expect(localStorage.setItem).toHaveBeenCalledWith("token", "fakeToken");
    expect(mockSignIn).toHaveBeenCalledWith("fakeToken");
    expect(toast.success).toHaveBeenCalledWith("Wow so easy !");
    expect(mockNavigate).toHaveBeenCalledWith("/transacoes");
  });

  it("deve exibir um toast de erro em caso de falha no login", async () => {
    (signInRequest as jest.Mock).mockRejectedValue(
      new Error("Erro de autenticação")
    );
    const { result, waitForNextUpdate } = renderHook(() => useLoginModel());

    await act(async () => {
      result.current.handleSubmitLoginForm({
        //@ts-ignore
        cpf: "12345678900",
        password: "wrongpassword",
      });
    });

    await waitForNextUpdate();

    expect(toast.error).toHaveBeenCalledWith("Wow so easy !");
    expect(mockSignIn).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
