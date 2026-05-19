import React from "react";
import ToDoList from "./ToDoList";

export default function MainTask() {
  let arr = [
    "Learn React useReducer in depth",
    "Build a task manager app",
    "practice React componet",
    "Build a small project",
    "deploy project on netlify",
  ];
  return (
    <div className="main-task">
      <div className="title">
        <h1 className="title-h2">All Tasks</h1>
        <p>Manage your tasks and stay productive</p>
      </div>
      <div className="input-wrap">
        <input type="text" placeholder="what need to be done" />
        <button className="btn-submit">Add Tasks</button>
      </div>
      <div className="all-to-do">
        <ToDoList array={arr} />
      </div>
    </div>
  );
}
