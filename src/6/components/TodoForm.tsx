import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTask: (task: string) => void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
