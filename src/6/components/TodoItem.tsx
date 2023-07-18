import React from "react";

interface TodoItemProps {
  task: string;
  done: boolean;
  toggleDone: () => void;
  deleteTask: () => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  task,
  done,
  toggleDone,
  deleteTask,
}) => {
  const textDecoration = done ? "line-through" : "none";
  const color = done ? "#888" : "inherit";

  return (
    <div className={`todo-item ${done ? "done" : ""}`}>
      <span className="task-text" style={{ textDecoration, color }}>
        {task}
      </span>
      {!done && (
        <button className="done-button" onClick={toggleDone}>
          Done
        </button>
      )}
      <button className="delete-button" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
