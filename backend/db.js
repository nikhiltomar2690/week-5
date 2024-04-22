/*
db schema
Todo : {
    title :String,
    description : String,
    completed: boolean
}
*/

const mongoose = require("mongoose");
// mongo connection setup
mongoose.connect(
  "mongodb+srv://freakyhell6:bMTuL0Vixf8toNPH@cluster0.0dbd9ma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todo", todoSchema);
module.exports = {
  todo,
};
