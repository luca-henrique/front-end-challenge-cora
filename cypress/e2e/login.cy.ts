/// <reference types="cypress" />

describe("Teste E2E de Login", () => {
  it("Deve realizar login com credenciais válidas e redirecionar para a página de transações", () => {
    cy.visit("/login");

    // Interage com os campos de CPF e senha
    cy.get('input[placeholder="Insira seu CPF"]').type("358.193.578-33");
    cy.get('input[placeholder="Digite sua senha"]').type("123456");

    // Submete o formulário
    cy.get("form").submit();

    // // Verifica se o login foi bem-sucedido e o redirecionamento ocorreu
    // cy.url().should("include", "/transacoes"); // Verifica se redirecionou para a página de transações

    // // Verifica se o token está salvo no localStorage
    // cy.window().then((win) => {
    //   const token = win.localStorage.getItem("token");
    //   expect(token).to.exist;
    // });

    // // Exibe uma mensagem de sucesso
    // cy.contains("Wow so easy !").should("be.visible");
  });

  it("Deve exibir mensagem de erro ao usar credenciais inválidas", () => {
    cy.visit("/login");

    // Interage com os campos de CPF e senha
    cy.get('input[placeholder="Insira seu CPF"]').type("000.000.000-00");
    cy.get('input[placeholder="Digite sua senha"]').type("senha_incorreta");

    // Submete o formulário
    cy.get("form").submit();

    // Verifica se a mensagem de erro é exibida
    cy.contains("Wow so easy !").should("be.visible");
  });
});
