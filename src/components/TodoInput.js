import React, { useState } from "react";
import { addTodo } from "./redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const TodoInput = () => {
   const [name, setName] = useState();
   const dispatch = useDispatch();

   return (
      <>
         <div className="row m-2 w-75 mx-auto">
            <input
               onChange={(e) => setName(e.target.value)}
               value={name}
               type="text"
               className="col form-control"
            />

            <button
               onClick={() => {
                  dispatch(
                     addTodo({
                        id: uuid(),
                        name: name,
                     })
                  );
                  setName("");
               }}
               className="btn btn-primary w-25"
            >
               Add
            </button>
         </div>
      </>
   );
};

export default TodoInput;
