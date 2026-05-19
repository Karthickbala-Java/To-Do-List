import React from "react";

export default function ToDoList({ array }) {
  return (
    <>
      <ul className="ul-todo">
        {array.map((item, index) => (
          <li key={index} className="li-todo">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
