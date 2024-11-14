import { LoginSchema } from "./login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInRequest } from "../api/auth";
import {
  FieldTypeSignInScreenSchema,
  LoginSchemaType,
} from "../../../entities/login/types/type";
import { useAuthStore } from "../../../app/store/use-auth-store";

export const useLoginModel = () => {
  const notifySuccess = () => toast.success("Wow so easy !");
  const signIn = useAuthStore((state) => state.login);

  const token = useAuthStore((state) => state.token);

  console.log(token);

  const navigation = useNavigate();

  const { setValue, handleSubmit, clearErrors, watch, formState } =
    useForm<LoginSchemaType>({
      resolver: zodResolver(LoginSchema),
      mode: "all",
      defaultValues: {
        cpf: "",
        password: "",
      },
    });

  const { errors } = formState;

  const handleChangeInputValue = (
    fieldName: FieldTypeSignInScreenSchema,
    value: string
  ) => {
    setValue(fieldName, value);
    clearErrors(fieldName);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginSchemaType) => {
      return signInRequest(data);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      signIn(data.data.token);
      notifySuccess();
    },
    onError: () => toast.error("Wow so easy !"),
  });

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
    navigation("/transacoes");
  };

  const { cpf, password } = watch();

  return {
    handleSubmitLoginForm: handleSubmit(onSubmit),
    handleChangeInputValue,
    errors,
    cpf,
    password,
    isPending,
  };
};
