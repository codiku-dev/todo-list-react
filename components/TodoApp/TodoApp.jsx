import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Header } from "../Header/Header";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskList } from "../TaskList/TaskList";
import s from "./TodoApp.module.css";

export const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTaskList = taskList.filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const toggleTaskStatus = (task) => {
    const updatedTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, isCompleted: !t.isCompleted };
      } else {
        return t;
      }
    });
    setTaskList(updatedTaskList);
  };

  function addTask(title) {
    setTaskList([
      ...taskList,
      {
        title,
        isCompleted: false,
        id: uuid(),
      },
    ]);
  }
  const deleteTask = (task) => {
    const updatedTaskList = taskList.filter((t) => t.id !== task.id);
    setTaskList(updatedTaskList);
  };
  return (
    <div className={s.root}>
      <div>
        <Header />
        <input
          placeholder="Type a task to filter..."
          style={{ marginBottom: 20 }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <TaskInput onSubmit={addTask} />
        <TaskList taskList={filteredTaskList} onClickItem={toggleTaskStatus} onClickItemTrash={deleteTask} />
      </div>
    </div>
  );
};
