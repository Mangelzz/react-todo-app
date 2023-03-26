import React from "react";

const TodoComputed = ({todoCounter, clearComplete}) => {
  return (
    <section className="dark:bg-gray-800 transition-all duration-1000 flex justify-between rounded-b-md bg-white py-4 px-4">
      <span className="text-gray-400">{todoCounter} items left</span>
      <button onClick={clearComplete} className="text-gray-400">Clear completed</button>
    </section>
  );
};

export default TodoComputed;
