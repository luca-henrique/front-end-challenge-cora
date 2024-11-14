import { LoginSchemaType } from "../../../entities/login/types/type";
import api from "../../../services/axios";

export const signInRequest = async (data: LoginSchemaType) => {
  const response = api.post("/auth", data);
  return response;
};
