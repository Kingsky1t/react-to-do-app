import React from "react";

export default function Task(props) {
  return (
    <>
      <div>{props.desc}</div>
      <button onClick={()=>{props.deleteTask(props.index)}}>Delete</button>
    </>
  );
}
