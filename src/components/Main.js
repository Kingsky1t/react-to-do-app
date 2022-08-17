import React from "react";
import Task from "./Task/Task";

export default function Main() {
  const [taskList, setTaskList] = React.useState([]);
  const [formInput, setFormInput] = React.useState("");

  function addTask() {
    setTaskList((prevItem) => {
      return [...prevItem, { key: taskList.length, desc: formInput }];
    });
  }

  function handleFormChange(event) {
    setFormInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask();
    setFormInput("");
  }

  function deleteTask(id) {
    setTaskList(taskList.filter(item=>item.key!==id))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          onChange={handleFormChange}
          value={formInput}
        />
        <button>Add</button>
      </form>

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
