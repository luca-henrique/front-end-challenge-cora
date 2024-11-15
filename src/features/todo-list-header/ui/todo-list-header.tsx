
import logoImage from "../../../shared/assets/images/logo.svg";

import './style.css'

export const TodoListHeader = () => {
  return (
    <header className="todo-list-header">
      <img src={logoImage} alt="Cora" title="Cora"></img>
      <h1>Weekly to-do list &#128467;</h1>
      <h2>
        Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
      </h2>
      <p>
        Marque como{" "}
        <strong>
          <u>done</u>
        </strong>{" "}
        as tasks que você conseguir concluir (elas já precisam renderizar com
        o status <strong>done</strong>)
      </p>
      <p className="disclaimer">
        Items obrigatórios marcados com arteristico (<strong>*</strong>)
      </p>
    </header>
  )
}
