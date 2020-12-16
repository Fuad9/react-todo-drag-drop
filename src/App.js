import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
   return (
      <>
         <div className="row">
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>Todo</h3>
               <TodoInput />
               <TodoList />
            </div>
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>In Progress</h3>
               <TodoInput />
               <TodoList />
            </div>
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>Done</h3>
               <TodoInput />
               <TodoList />
            </div>
         </div>
      </>
   );
}

export default App;
