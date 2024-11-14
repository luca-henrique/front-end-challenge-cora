import { FormSearchTodo } from "@/components/molecules/form-search-todo/form-search-todo"



export const TodoListFilter = () => {
  return (
    <FormSearchTodo
      handleSearch={handleSearch}
      searchInputValue={searchInputValue}
      handleChange={handleChange}
    />
  )
}
