import { useState, ChangeEvent, FormEvent } from "react";

import { TODO_LIST } from "../../mocks/todos";

import { TaskList } from "../../components/organisms/task-list/task-list";
import { HeaderTodo } from "../../components/molecules/header-todo/header-todo";
import { FormSearchTodo } from "../../components/molecules/form-search-todo/form-search-todo";

import "./index.css";
import { StatusProps } from "../../types/status";


export default function Todo() {
  const [items, setItems] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInputValue);
  };

  const handleDeleteTask = (id: string) => {
    const editedItems = items.filter((item) => item.id !== id);
    setItems([...editedItems]);
  };

  const handleChangeTaskStatus = (id: string, status: StatusProps) => {
    const reversedStatus: StatusProps = status === "pending" ? "done" : "pending";

    const updatedTasks = items.map((task) =>
      task.id === id ? { ...task, status: reversedStatus } : task
    );

    setItems([...updatedTasks]);
  };

  const filteredTasks =
    search.length >= 1
      ? items.filter((task) => task.title.includes(search))
      : items;

  return (
    <main id="page" className="todo">
      <HeaderTodo />
      <div className="todo__wrapper">
        <FormSearchTodo
          handleSearch={handleSearch}
          searchInputValue={searchInputValue}
          handleChange={handleChange}
        />
        <TaskList
          items={filteredTasks}
          handleChangeTaskStatus={handleChangeTaskStatus}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </main>
  );
}
