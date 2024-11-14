import { signInRequest } from "./auth";
import api from "../../../shared/services/axios";
import { LoginSchemaType } from "../../../entities/login/types/type";

jest.mock("../../../shared/services/axios");

describe("signInRequest", () => {
  const mockData: LoginSchemaType = {
    cpf: "testuser",
    password: "testpassword",
  };

  it("deve retornar a resposta da API em caso de sucesso", async () => {
    const mockResponse = { data: { token: "fakeToken" } };
    (api.post as jest.Mock).mockResolvedValue(mockResponse);

    const response = await signInRequest(mockData);
    expect(response).toEqual(mockResponse);
    expect(api.post).toHaveBeenCalledWith("/auth", mockData);
  });

  it("deve lançar um erro em caso de falha na requisição", async () => {
    const mockError = new Error("Erro de autenticação");
    (api.post as jest.Mock).mockRejectedValue(mockError);

    await expect(signInRequest(mockData)).rejects.toThrow(
      "Erro de autenticação"
    );
    expect(api.post).toHaveBeenCalledWith("/auth", mockData);
  });
});
