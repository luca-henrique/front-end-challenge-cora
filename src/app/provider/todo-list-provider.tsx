import { TODO_LIST } from '../../mocks/todos';
import React, { createContext, useState } from 'react';


export interface TodoListContextProps {
  data: string[]
  deleteItem: (id: number) => void
  toggleStatus: (id: number) => void
}

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);

interface PaymentMethodProviderProps {
  children: React.ReactNode;
}

export function TodoListProvider({ children }: PaymentMethodProviderProps) {
  const data: string[] = ['']

  const [items, setItems] = useState(TODO_LIST);

  const deleteItem = (id: number) => { }

  const toggleStatus = (id: number) => { }

  return (
    <TodoListContext.Provider
      value={{
        data,
        deleteItem,
        toggleStatus
      }}>
      {children}
    </TodoListContext.Provider>
  );
}
