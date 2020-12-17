import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "./redux/actions";

import "./TodoItem.css";

const TodoItem = ({ todo, props }) => {
   const dispatch = useDispatch();
   const [editTodo, setEditTodo] = useState(false);
   const [todoName, setTodoName] = useState(todo.name);

   const dragStart = (e) => {
      const target = e.target;

      e.dataTransfer.setData("card_id", target.id);

      setTimeout(() => {
         target.style.display = "none";
      }, 0);
   };

   const dragOver = (e) => {
      e.stopPropagation();
   };

   return (
      <>
         <div
            className="row mx-5 my-5 align-items-center"
            id="card1"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
         >
            <div className="col-12 col-sm-12 col-md-6" style={{ color: "orange" }}>
               {editTodo ? (
                  <input
                     onChange={(e) => setTodoName(e.target.value)}
                     type="text"
                     className="form-control"
                     value={todoName}
                  />
               ) : (
                  <h4>{todo.name}</h4>
               )}
            </div>

            <div className="col-12 col-sm-12 col-md-6">
               <button
                  onClick={() => {
                     dispatch(
                        updateTodo({
                           ...todo,
                           name: todoName,
                        })
                     );
                     editTodo && setTodoName(todo.name);
                     setEditTodo(!editTodo);
                  }}
                  className={editTodo ? "btn btn-secondary m-2" : "btn btn-warning m-2"}
               >
                  {editTodo ? "Update" : "Edit"}
               </button>

               <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger m-2">
                  Delete
               </button>
            </div>
         </div>
      </>
   );
};

export default TodoItem;
