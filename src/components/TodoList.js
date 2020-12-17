import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

import "./TodoList.css";

const TodoList = (props) => {
   const todos = useSelector((state) => state);

   const drop = (e) => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData("card_id");

      const card = document.getElementById(card_id);
      card.style.display = "block";

      e.target.appendChild(card);
   };

   const dragOver = (e) => {
      e.preventDefault();
   };

   return (
      <div className="card2" id="card2" onDrop={drop} onDragOver={dragOver}>
         {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
         })}
      </div>
   );
};

export default TodoList;
