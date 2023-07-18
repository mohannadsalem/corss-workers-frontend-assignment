import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  tasks: Todo[];
  toggleDone: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  tasks,
  toggleDone,
  deleteTask,
}) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem
            task={task.task}
            done={task.done}
            toggleDone={() => toggleDone(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
