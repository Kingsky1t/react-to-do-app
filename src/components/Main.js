import React from "react";
import Task from "./Task/Task";
import TaskForm from "./Task/TaskForm";
import "./Main.css"

export default function Main() {
  const [taskList, setTaskList] = React.useState([]);

  function addTask(formInput) {
    setTaskList((prevItem) => {
      return [...prevItem, { key: taskList.length, desc: formInput }];
    });
  }

  function handleSubmit(event, formInput) {
    addTask(formInput);
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((item) => item.key !== id));
  }

  // console.log(taskList);
  return (
    <>
      <h1 className="main-header">To-Do List</h1>
      <TaskForm handleSubmit={handleSubmit} />
      <h1 className="main-header">Tasks to do:</h1>
      <div className="task-container">

        {taskList.length===0?
        
        <h2 className="no-task">No tasks pending...</h2>:

        taskList.map((item) => {
          return (
            <Task
              key={item.key}
              index={item.key}
              desc={item.desc}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

//sort key problem
