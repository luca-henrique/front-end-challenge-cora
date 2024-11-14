import { render, screen, fireEvent } from "@testing-library/react";
import { LoginView } from "./login";
import { useLoginModel } from "../model/login.model";

jest.mock("../model/login.model");

describe("LoginView", () => {
  const mockHandleSubmitLoginForm = jest.fn();
  const mockHandleChangeInputValue = jest.fn();

  beforeEach(() => {
    (useLoginModel as jest.Mock).mockReturnValue({
      handleSubmitLoginForm: mockHandleSubmitLoginForm,
      cpf: "",
      errors: {},
      handleChangeInputValue: mockHandleChangeInputValue,
      password: "",
      isPending: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar os campos de CPF e senha e o botão de login", () => {
    render(<LoginView />);

    expect(screen.getByPlaceholderText("Insira seu CPF")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /continuar/i })).toBeInTheDocument();
  });

  it("deve chamar `handleChangeInputValue` ao alterar o valor do CPF", () => {
    render(<LoginView />);

    const cpfInput = screen.getByPlaceholderText("Insira seu CPF");
    fireEvent.change(cpfInput, { target: { value: "12345678900" } });

    expect(mockHandleChangeInputValue).toHaveBeenCalledWith("cpf", "12345678900");
  });

  it("deve chamar `handleChangeInputValue` ao alterar o valor da senha", () => {
    render(<LoginView />);

    const passwordInput = screen.getByPlaceholderText("Digite sua senha");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(mockHandleChangeInputValue).toHaveBeenCalledWith("password", "password123");
  });

  it("deve chamar `handleSubmitLoginForm` ao enviar o formulário", () => {
    render(<LoginView />);

    const form = screen.getByRole("form", { name: "login" });
    fireEvent.submit(form);

    expect(mockHandleSubmitLoginForm).toHaveBeenCalled();
  });

  it("deve desabilitar o botão de login enquanto `isPending` estiver verdadeiro", () => {
    (useLoginModel as jest.Mock).mockReturnValue({
      handleSubmitLoginForm: mockHandleSubmitLoginForm,
      cpf: "",
      errors: {},
      handleChangeInputValue: mockHandleChangeInputValue,
      password: "",
      isPending: true,
    });

    render(<LoginView />);

    const button = screen.getByRole("button", { name: /entrando.../i });
    expect(button).toBeDisabled();
  });
});
