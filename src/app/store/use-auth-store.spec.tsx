import { useAuthStore } from "./use-auth-store"; // ajuste o caminho conforme necessário

describe("useAuthStore", () => {
  beforeEach(() => {
    localStorage.clear(); // Limpa o localStorage antes de cada teste
  });

  it("deve iniciar com o token do localStorage", () => {
    localStorage.setItem("token", "initialToken");
    const { token } = useAuthStore.getState();
    expect(token).toBe("initialToken");
  });

  it("deve iniciar com um token vazio se não houver token no localStorage", () => {
    const { token } = useAuthStore.getState();
    expect(token).toBe("");
  });

  it("deve atualizar o token ao chamar login", () => {
    const newToken = "newToken";
    useAuthStore.getState().login(newToken);
    const { token } = useAuthStore.getState();
    expect(token).toBe(newToken);
  });
});
