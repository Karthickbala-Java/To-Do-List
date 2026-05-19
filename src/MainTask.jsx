import React, { useState } from "react";
import ToDoList from "./ToDoList";

export default function MainTask() {
  let arr1 = [
    "Learn React useReducer in depth",
    "Build a task manager app",
    "practice React componet",
    "Build a small project",
    "deploy project on netlify",
  ];
  const [value, setValue] = useState("");
  let [arr, setArr] = useState(arr1);
  return (
    <div className="main-task">
      <div className="title">
        <h1 className="title-h2">All Tasks</h1>
        <p>Manage your tasks and stay productive</p>
      </div>
      <div className="input-wrap">
        <input
          type="text"
          placeholder="what need to be done"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);

            console.log(e);
          }}
        />
        <button
          className="btn-submit"
          onClick={(e) => {
            setValue("");
            console.log(arr, value);
            setArr([...arr, value]);
            setValue("");
          }}
        >
          Add Tasks
        </button>
      </div>
      <div className="all-to-do">
        <ToDoList array={arr} />
      </div>
    </div>
  );
}
