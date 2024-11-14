import logoFullImage from "../../../assets/images/logo-full.svg";

import { Icon } from "../../../assets/icons";
import { Input } from "../../../components/atoms/input/input";
import { Form, Title, Image, CustomButton } from "./style";
import { documentMask } from "../../../shared/utils/document-mask";
import { useLoginModel } from "../model/login.model";
import { Separator } from "../../../components/atoms/separator/separator";

export const LoginView = () => {
  const {
    handleSubmitLoginForm,
    cpf,
    errors,
    handleChangeInputValue,
    password,
    isPending,
  } = useLoginModel();

  return (
    <div>
      <Form id="login" onSubmit={handleSubmitLoginForm}>
        <Image src={logoFullImage} alt="Cora" title="Cora" />
        <Title>Fazer LogIn</Title>
        <Input
          placeholder="Insira seu CPF"
          value={documentMask(cpf)}
          errorMesssage={errors.cpf?.message}
          onChange={(event) =>
            handleChangeInputValue("cpf", event.target.value)
          }
          maxLength={14}
        />
        <Separator height={14} />
        <Input
          placeholder="Digite sua senha"
          type="password"
          value={password}
          errorMesssage={errors.password?.message}
          onChange={(event) =>
            handleChangeInputValue("password", event.target.value)
          }
        />
        <Separator height={24} />
        <CustomButton disabled={isPending}>
          {isPending ? "Entrando..." : "Continuar"}
          <Icon.ArrowRight />
        </CustomButton>
      </Form>
    </div>
  );
};