import { z } from "zod";
import { LoginSchema } from "../../../features/login/model/login.schema";
import { useLoginModel } from "../../../features/login/model/login.model";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type FieldTypeSignInScreenSchema = keyof LoginSchemaType;
export type LoginViewProps = ReturnType<typeof useLoginModel>;
