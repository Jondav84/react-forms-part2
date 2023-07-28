/** @format */

import React, { useState } from "react";

const NewTodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodoForm;
