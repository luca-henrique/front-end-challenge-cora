import api from "./axios";

export const fetchTransactionsData = async () => {
  const response = await api.get("/list");
  return response.data;
};
