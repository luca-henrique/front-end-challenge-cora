import { TaskProps } from '../../types/task';
import { TODO_LIST } from '../../mocks/todos';
import React, { ChangeEvent, createContext, FormEvent, useState } from 'react';


export interface TodoListContextProps {
  data: TaskProps[]
  deleteItem: (id: number) => void
  toggleStatus: (id: number) => void
  handleChangeValueSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: () => void
}

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);

interface PaymentMethodProviderProps {
  children: React.ReactNode;
}

export function TodoListProvider({ children }: PaymentMethodProviderProps) {

  const [items, setItems] = useState(TODO_LIST);

  const deleteItem = (id: number) => { }

  const toggleStatus = (id: number) => { }

  const [search, setSearch] = useState("");

  const handleChangeValueSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmitSearch = () => {
    const filteredTasks =
      search.length >= 1
        ? items.filter((task) => task.title.includes(search))
        : items;
    setItems([...filteredTasks])
  }


  return (
    <TodoListContext.Provider
      value={{
        data: items,
        deleteItem,
        toggleStatus,
        handleChangeValueSearch,
        handleSubmitSearch
      }}>
      {children}
    </TodoListContext.Provider>
  );
}
