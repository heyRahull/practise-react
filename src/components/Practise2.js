import React, { useState } from "react";

const Practise2 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "task1", id: 1, completed: false },
    { text: "task2", id: 2, completed: false },
    { text: "task3", id: 3, completed: false },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  const handleAddTask = () => {
    setTodos([...todos, { text: todo, id: Date.now(), completed: false }]);
    setTodo("");
  };

  const handleRemoveTask = (removeId) => {
    const updatedList = todos.map((todo) => {
      return todo.id == removeId
        ? { ...todo, completed: !todo.completed }
        : todo;
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
    const updatedList = todos.map((todo) => {
      return todo.id == saveId ? { ...todo, text: editTodo } : todo;
    });
    setTodos(updatedList);
    setEditIndex(null);
    setEditTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTask}>Add task</button>
      <h1>Your Tasks</h1>

      {todos.map((todo) => {
        return (
          !todo.completed && (
            <div key={todo.id}>
              {editIndex == todo.id ? (
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
              ) : (
                <span>{todo.text}</span>
              )}
              {editIndex == todo.id ? (
                <button onClick={() => handleSave(todo.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              )}
              <button onClick={() => handleRemoveTask(todo.id)}>Remove</button>
            </div>
          )
        );
      })}

      <h1>Completed tasks</h1>

      {todos.map((todo) => {
        return (
          todo.completed && (
            <p style={{ textDecoration: "line-through" }} key={todo.id}>
              {todo.text}
            </p>
          )
        );
      })}
    </div>
  );
};

export default Practise2;
