
import { TodoListHeader } from "../../features/todo-list-header/ui/todo-list-header";
import { TodoListProvider } from "../../app/provider/todo-list-provider";
import { TodoListFilter } from "../../features/todo-list-filter/ui/todo-list-filter";
import { TodoList } from "../../features/todo-list/ui/todo-list";

import "./index.css";


export default function Todo() {
  return (
    <TodoListProvider>
      <main id="page" className="todo">
        <TodoListHeader />
        <div className="todo__wrapper">
          <TodoListFilter />
          <TodoList />
        </div>
      </main>
    </TodoListProvider>
  );
}
