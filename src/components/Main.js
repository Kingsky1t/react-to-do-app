import React from "react";
import Task from "./Task/Task";
import TaskForm from "./Task/TaskForm";

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
      <TaskForm handleSubmit={handleSubmit} />

      {taskList.map((item) => {
        return (
          <Task
            key={item.key}
            index={item.key}
            desc={item.desc}
            deleteTask={deleteTask}
          />
        );
      })}
    </>
  );
}

//sort key problem
