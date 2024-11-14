import { useTodoFilter } from "../model/use-filter-todo"



export const TodoListFilter = () => {
  const { handleChangeValueSearch, handleSubmitSearch } = useTodoFilter()

  return (
    <form className="todo__search" onSubmit={handleSubmitSearch}>
      <input
        id="search"
        placeholder="busca por texto..."
        onChange={handleChangeValueSearch}
      />
      <button type="submit">buscar</button>
    </form>
  )
}
