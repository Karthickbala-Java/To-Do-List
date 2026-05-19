import React from "react";
import "./assets/vite.svg";
export default function PositionOfTask() {
  return (
    <div className="container-poft">
      <h3>
        Task <span className="highlight">Manger</span>
      </h3>
      <ul>
        <li>
          <a href="#" className="task-link">
            All Tasks
          </a>
        </li>
        <li>
          <a href="#" className="task-link">
            Pending
          </a>
        </li>
        <li>
          <a href="#" className="task-link">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}
