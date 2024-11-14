import logoFullImage from "../../assets/images/logo-full.svg";

import { Icon } from "../../shared/assets/icons";
import { Input } from "../../components/atoms/input/input";
import { Button } from "../../components/atoms/button/button";
import { Form, Title } from "./style";
import { documentMask } from "../../utils/document-mask";
import { LoginViewProps } from "./type";

export const LoginView = ({
  handleSubmitLoginForm,
  handleChangeInputValue,
  errors,
  cpf,
  password,
  isPending,
}: LoginViewProps) => {
  return (
    <div>
      <Form id="login" onSubmit={handleSubmitLoginForm}>
        <img src={logoFullImage} alt="Cora" title="Cora" />
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
        <Input
          placeholder="Digite sua senha"
          type="password"
          value={password}
          errorMesssage={errors.password?.message}
          onChange={(event) =>
            handleChangeInputValue("password", event.target.value)
          }
        />
        <Button disabled={isPending}>
          {isPending ? "Entrando..." : "Continuar"}
          <Icon.ArrowRight />
        </Button>
      </Form>
    </div>
  );
};
