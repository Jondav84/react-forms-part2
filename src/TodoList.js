/** @format */

import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos([...todos, task]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NewTodoForm onAdd={handleAddTodo} />
      {todos.map((task, index) => (
        <Todo
          key={index}
          task={task}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
