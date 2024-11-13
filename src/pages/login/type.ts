import { z } from "zod";
import { LoginSchema } from "./schema";
import { useLoginModel } from "./login.model";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type FieldTypeSignInScreenSchema = keyof LoginSchemaType;
export type LoginViewProps = ReturnType<typeof useLoginModel>;
