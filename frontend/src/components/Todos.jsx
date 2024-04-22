/*
 todos = [
    {
       title: "Go to Gym",
         description: "today is pull day",
            completed: false 
    }
    ,
    {
       title: "Go to Gym",
         description: "today is pull day",
            completed: false 
    }
 ]
*/
/* eslint-disable react/prop-types */
export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
