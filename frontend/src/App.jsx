import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchdata() {
    const data = await fetch("http://localhost:3000/todo");
    const parseddata = await data.json();
    // console.log(parseddata);
    setTodos(parseddata.todos);
  }
  fetchdata();

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
