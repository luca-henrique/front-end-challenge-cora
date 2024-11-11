import axios from "axios";

// Cria a instância do Axios com a baseURL
const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Adiciona um interceptor para as requisições
api.interceptors.request.use(
  (config) => {
    // Busca o token (ou outro dado) no localStorage
    const token = localStorage.getItem("token"); // Altere 'token' para o nome da chave desejada

    if (token) {
      // Adiciona o token ao header Authorization, por exemplo
      config.headers.Authorization = `token ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
