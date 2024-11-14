import { TaskProps } from '../../types/task';
import { TODO_LIST } from '../../mocks/todos';
import React, { ChangeEvent, createContext, FormEvent, useState } from 'react';
import { StatusProps } from '../../types/status';


export interface TodoListContextProps {
  data: TaskProps[]
  search: string
  deleteItem: (id: string) => void
  toggleStatus: (id: string, status: StatusProps) => void
  handleChangeValueSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: (event: FormEvent<HTMLFormElement>) => void
}

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);

interface PaymentMethodProviderProps {
  children: React.ReactNode;
}

export function TodoListProvider({ children }: PaymentMethodProviderProps) {

  const [items, setItems] = useState<TaskProps[]>(TODO_LIST);

  const deleteItem = (id: string) => {
    const editedItems = items.filter((item) => item.id !== id);
    setItems([...editedItems]);
  }

  const toggleStatus = (id: string, status: StatusProps) => {
    const reversedStatus: StatusProps = status === "pending" ? "done" : "pending";

    const updatedTasks = items.map((task) =>
      task.id === id ? { ...task, status: reversedStatus } : task
    );

    setItems([...updatedTasks]);
  }

  const [search, setSearch] = useState("");

  const handleChangeValueSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filteredTasks =
      search.length >= 1
        ? items.filter((task) => task.title.includes(search))
        : TODO_LIST;

    setItems([...filteredTasks])
  }


  return (
    <TodoListContext.Provider
      value={{
        data: items,
        deleteItem,
        toggleStatus,
        handleChangeValueSearch,
        handleSubmitSearch,
        search
      }}>
      {children}
    </TodoListContext.Provider>
  );
}
