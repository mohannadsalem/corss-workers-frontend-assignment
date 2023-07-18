import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Task } from "./types";
import "./index.scss";

const generateId = (): string => {
  const randomId = Math.random().toString(36).substring(2);
  return randomId;
};
const Task6: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: generateId(),
      task,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleDone = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const doneTasks = tasks.filter((task) => task.done);
  const pendingTasks = tasks.filter((task) => !task.done);

  return (
    <div id="task-6">
      <h2>Todo List</h2>
      <TodoForm addTask={addTask} />
      <h3>Pending Tasks</h3>
      <TodoList
        tasks={pendingTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
      />
      <h3>Done Tasks</h3>
      <TodoList
        tasks={doneTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Task6;
