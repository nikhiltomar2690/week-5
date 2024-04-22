import { useState } from "react";
export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 20, display: "block" }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        id="description"
        style={{ padding: 10, margin: 20, display: "block" }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button
        style={{ padding: 10, margin: 20, display: "block" }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};
