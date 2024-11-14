import z from "zod";
import { isValidCpf } from "../../../shared/validations/document";

const CPF_MIN_LENGTH = 11;

export const LoginSchema = z.object({
  cpf: z
    .string({ required_error: "CPF/CNPJ é obrigatório." })
    .refine((doc) => {
      const cleanedDoc = doc.replace(/\D/g, "");
      return cleanedDoc.length >= CPF_MIN_LENGTH;
    }, `CPF deve conter no mínimo ${CPF_MIN_LENGTH} caracteres.`)
    .refine(
      (doc) => {
        return isValidCpf(doc);
      },
      { message: "CPF inválido" }
    ),
  password: z.string().min(1, { message: "Senha é obrigatório." }),
});
