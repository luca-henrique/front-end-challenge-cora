import { LoginSchemaType } from "../../pages/login/type";
import api from "./axios";

export const signInRequest = async (data: LoginSchemaType) => {
  const response = api.post("/auth", data);
  return response;
};
