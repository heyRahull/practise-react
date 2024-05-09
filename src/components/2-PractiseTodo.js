import React, { useState } from "react";
import YourTasks from "../YourTasks";

export default function App() {
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "eating", id: 1, completed: false, checked: false },
    { text: "camping", id: 2, completed: false, checked: false },
    { text: "playing", id: 3, completed: false, checked: false },
    { text: "dancing", id: 4, completed: false, checked: false },
    { text: "travelling", id: 5, completed: false, checked: false },
  ]);

  const handleAdd = () => {
    setTodos([...todos, { text: todo, id: Date.now(), checked: false }]);
  };

  const handleRemove = (removeId) => {
    const updatedList = todos.map((todo) => {
      return todo.id == removeId ? { ...todo, completed: true } : todo;
    });
    setTodos(updatedList);
  };

  const handleToggle = (toggleId) => {
    const updatedList = todos.map((todo) => {
      return todo.id == toggleId ? { ...todo, checked: true } : todo;
    });
    setTodos(updatedList);
  };

  const handleEdit = (editId) => {
    setEditIndex(editId);
    const editedTodo = todos.find((todo) => {
      return todo.id == editId;
    });
    setEditTodo(editedTodo.text);
  };

  const handleSave = (saveId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == saveId ? { ...todo, text: editTodo } : todo;
      })
    );
    setEditIndex(null);
    setEditTodo("");
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <h1>Your Tasks</h1>

      {todos.map((todo) => {
        return (
          !todo.completed && (
            <div>
              <p key={todo.id}>
                <input type="checkbox" onClick={() => handleToggle(todo.id)} />
                {editIndex == todo.id ? (
                  <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                ) : todo.checked ? (
                  <span style={{ textDecoration: "line-through" }}>
                    {todo.text}
                  </span>
                ) : (
                  <span>{todo.text}</span>
                )}
                {editIndex == todo.id ? (
                  <button onClick={() => handleSave(todo.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(todo.id)}>Edit</button>
                )}
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
              </p>
            </div>
          )
        );
      })}

      <h1>Completed Tasks</h1>

      {todos.map((todo) => {
        return (
          todo.completed && (
            <div>
              <p key={todo.id}>{todo.text}</p>
            </div>
          )
        );
      })}
    </div>
  );
}
