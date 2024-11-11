import { useState } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./index.css";
import { ChangeEvent } from "react"
import api from "../../services/axios";

export function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (event: ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAuth = async (event) => {
    event.preventDefault()
    console.log({
      cpf,
      password,
    });

    const { data } = await api.post('/auth', {
      "cpf": "35819357833",
      "password": "123456"
    })
    localStorage.setItem('token', data.token)


  };

  return (
    <form id="login" onSubmit={handleAuth}>
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h1>Fazer Login</h1>
      <input id="cpf" placeholder="Insira seu CPF" onChange={handleChangeCPF} />
      <input
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
        type="password"
      />
      <button>
        Continuar
        <img src={arrowRightImage} alt="arrow left" />
      </button>
    </form>
  );
}

