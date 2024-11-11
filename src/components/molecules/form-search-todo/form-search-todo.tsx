import { ChangeEvent, FormEvent } from "react"

interface FormSearchTodoProps {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void
  searchInputValue: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormSearchTodo = ({ handleSearch, searchInputValue, handleChange }: FormSearchTodoProps) => {
  return (
    <form className="todo__search" onSubmit={handleSearch}>
      <input
        id="search"
        placeholder="busca por texto..."
        value={searchInputValue}
        onChange={handleChange}
      />
      <button type="submit">buscar</button>
    </form>
  )
}
