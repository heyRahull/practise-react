import React, { useState } from "react";

export const TodoCheckbox = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "1", id: 1, checked: false },
    { text: "2", id: 2, checked: false },
    { text: "3", id: 3, checked: false },
    { text: "4", id: 4, checked: false },
    { text: "5", id: 5, checked: false },
  ]);

  const handleToggle = (toggleId) => {
    const updatedList = todos.map((todo) => {
      return todo.id == toggleId ? { ...todo, checked: !todo.checked } : todo;
    });

    setTodos(updatedList);
  };

  const handleAdd = () => {
    setTodos([...todos, { text: todo, id: Date.now(), checked: false }]);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
      <h1>Your Tasks</h1>
      <ul>
        {todos.map((todo) => {
          return (
            !todo.checked && (
              <li key={todo.id}>
                {todo.text}
                <input type="checkbox" onChange={() => handleToggle(todo.id)} />
              </li>
            )
          );
        })}
      </ul>

      <h1>Completed Tasks</h1>
      <ul>
        {todos.map((todo) => {
          return (
            todo.checked && (
              <div key={todo.id}>
                <li>{todo.text}</li>
              </div>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default TodoCheckbox;
