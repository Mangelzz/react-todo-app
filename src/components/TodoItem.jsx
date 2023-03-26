import React from "react";
import CheckedIcon from "./icons/CheckedIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, deleteTodo, updateTodo}) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-400 py-4 ">
      <button
        onClick={() => updateTodo(id)}
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        } `}
      >
        {completed && <CheckedIcon />}
      </button>

      <p className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}>{title}</p>
      <button className="flex-none" onClick={() => deleteTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
