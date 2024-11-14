import { LoginSchema } from "./schema";
import { FieldTypeSignInScreenSchema, LoginSchemaType } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInRequest } from "../../shared/services/auth";

export const useLoginModel = () => {
  const notifySuccess = () => toast.success("Wow so easy !");

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
      notifySuccess();
      navigation("/transacoes");
    },
    onError: () => toast.error("Wow so easy !"),
  });

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
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
