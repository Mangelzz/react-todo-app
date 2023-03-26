import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }
    
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={submit}
      className="dark:bg-gray-800 transition-all duration-1000 flex items-center gap-4 overflow-hidden rounded-lg bg-white py-4 px-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="dark:bg-gray-800 w-full duration-1000 text-gray-400 outline-none transition-all"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
