import { LoginSchemaType } from "../../../entities/login/types/type";
import api from "../../../shared/services/axios";

export const signInRequest = async (data: LoginSchemaType) => {
  try {
    const response = await api.post("/auth", data);
    return response;
  } catch (error) {
    console.error("Erro na requisição de login:", error);
    throw error;
  }
};
