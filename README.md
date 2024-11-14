# <img src="https://github.com/corabank/frontend-case/blob/16051123b026faaba02e6d0959fe471a6a6dac2a/src/assets/logo.svg" alt="Cora" title="Cora" width="50" /> Frontend Challenge

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
  - [Portas Utilizadas](#portas-utilizadas)
- [Como Começar](#-como-começar)
  - [Credenciais para Teste](#credenciais-para-teste)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Boas Práticas](#-boas-práticas)
- [Processo de Desenvolvimento](#-processo-de-desenvolvimento)
  - [Workflow](#workflow)
  - [Commits](#commits)
- [Considerações Técnicas e de Segurança](#-considerações-técnicas-e-de-segurança)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Ambiente de Produção](#ambiente-de-produção)
- [Práticas de Equipe](#-práticas-de-equipe)
- [Licença](#-licença)

## 📋 Sobre o Projeto

Este projeto é uma aplicação bancária desenvolvida como parte do processo seletivo da Cora. A aplicação implementa:

- Sistema de autenticação
- Dashboard bancário
- Listagem de transações
- Interface responsiva e acessível

## 🚀 Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Zustand** - Gerenciamento de estado
- **React Router** - Roteamento
- **Axios** - Cliente HTTP
- **Express** - Backend mockado
- **React Hook Form** - Formulario
- **Zod** - validação de formularios

## 🏗 Arquitetura

O projeto utiliza uma arquitetura Feature-Sliced Design, organizada da seguinte forma:

```
📦 cora-frontend-case
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 config
 ┃ ┃ ┣ 📂 provider
 ┃ ┃ ┣ 📂 router
 ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┗ 📂 router
 ┃ ┃
 ┣ ┣ 📂 entities
 ┃ ┃  ┗ 📂 login
 ┃ ┣ 📂 fetures
 ┃ ┃  ┣ 📂 login
 ┃ ┃  ┃  ┣ 📂 ui
 ┃ ┃  ┃  ┣ 📂 model
 ┃ ┃  ┃  ┗ 📂 api
```

### Portas Utilizadas

- Backend API: 3000
- Start: 5173

## 🚦 Como Começar

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run start
```

### Credenciais para Teste

(aproveite para testar também com diferentes valores, mas os que vão funcionar são esses)

```
CPF: 35819357833
Senha: 123456
```

## ✨ Boas Práticas

- **Clean Code**: Código limpo e autoexplicativo
- **Conventional Commits**: Padronização de commits
- **TypeScript**: Tipagem forte para maior segurança
- **Component-Driven Development**: Componentização eficiente
- **Error Handling**: Tratamento adequado de erros
- **Performance**: Otimizações de carregamento e renderização

### Commits

Seguindo Conventional Commits:

```
feat: add new transaction list
fix: correct authentication flow
docs: update readme
style: format code
refactor: improve error handling
```

## 📄 Licença

MIT © [corabank](https://github.com/corabank)
