import React from "react";
import "./Task.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Task(props) {
  return (
    <div className="task-item">
      <p>{props.desc}</p>
      <button onClick={()=>{props.deleteTask(props.index)}}>
        <FontAwesomeIcon className="task-item-delete-icon" icon={faTrashCan}/>
      </button>
    </div>
  );
}
