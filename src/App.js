import React from "react";

import "./App.css";

import { Provider } from "react-redux";
import { store } from "../src/components/redux/store";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import Container from "./components/InProgress/Container";
import Card from "./components/InProgress/Card";

function App() {
   return (
      <>
         <div className="row">
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>Todo</h3>
               <Provider store={store}>
                  <TodoInput />
                  <TodoList />
               </Provider>
            </div>
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>In Progress</h3>
               <Container>
                  <Card draggable="true"></Card>
               </Container>
            </div>
            <div className="todo-card col-12 col-sm-12 col-md-4">
               <h3>Done</h3>
            </div>
         </div>
      </>
   );
}

export default App;
