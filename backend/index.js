const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// can limit frontends with specific locations also
// app.use(cors({origin: "http://localhost:3000"}));

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.status(200).json({ todos });
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(400).json({
      msg: "Invalid inputs",
    });
  }
  //   put it in mongodb

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: createPayload.completed,
  });

  res.json({
    msg: "Todo created successfully",
  });
});

app.put("/todo/:id", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(400).json({
      msg: "Invalid inputs",
    });
  }
  const id = updatePayload.id;
  await todo.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      completed: true,
    }
  );

  res.status(200).json({
    msg: "Todo updated successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on localhost 3000");
});
