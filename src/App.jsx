import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialState = [
//   {
//     id: 1,
//     title: "Complete javascript course",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Go to the gym",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Read for 1 hour",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Pick up groceries",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "10 minutes meditation",
//     completed: false,
//   },
// ];

const initialState = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {
  const [todos, setTodos] = useState(initialState);

  useEffect (() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoCounter = todos.filter((todo) => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all")

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  const changeFilter = (filter) =>{
    setFilter(filter)
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen duration-1000 transition-all bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]">
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filterTodo()}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed todoCounter={todoCounter} clearComplete={clearComplete} />

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <footer className="mt-8 text-center dark:text-gray-600">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
